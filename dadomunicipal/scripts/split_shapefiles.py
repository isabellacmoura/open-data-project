#!/usr/bin/env python3
"""
Script para separar um shapefile geral de Portugal em shapefiles individuais
para cada município (308 municípios).
"""

import os
import sys
from pathlib import Path

try:
    import geopandas as gpd
    import pandas as pd
except ImportError:
    print("❌ Erro: Bibliotecas necessárias não encontradas.")
    print("Instale com: pip install geopandas pandas")
    sys.exit(1)

def normalize_municipio_name(name):
    """
    Normaliza o nome do município para usar como nome de arquivo.
    Remove acentos e converte para lowercase.
    """
    import unicodedata
    
    # Remove acentos
    normalized = unicodedata.normalize('NFD', str(name))
    normalized = ''.join(c for c in normalized if unicodedata.category(c) != 'Mn')
    
    # Converte para lowercase e remove caracteres especiais
    normalized = normalized.lower().strip()
    normalized = ''.join(c for c in normalized if c.isalnum() or c.isspace())
    normalized = normalized.replace(' ', '_')
    
    return normalized

def split_shapefiles(input_shapefile, output_dir, name_field='NAME_2'):
    """
    Separa o shapefile geral em shapefiles individuais para cada município.
    
    Args:
        input_shapefile (str): Caminho para o shapefile geral
        output_dir (str): Pasta onde salvar os shapefiles individuais
        name_field (str): Nome do campo que contém os nomes dos municípios
    """
    
    print(f"📁 Carregando shapefile: {input_shapefile}")
    
    try:
        # Carregar o shapefile geral
        gdf = gpd.read_file(input_shapefile)
        print(f"✅ Shapefile carregado com {len(gdf)} municípios")
        
        # Verificar se o campo existe
        if name_field not in gdf.columns:
            print(f"❌ Campo '{name_field}' não encontrado!")
            print(f"Campos disponíveis: {list(gdf.columns)}")
            return
        
        # Criar pasta de saída
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)
        
        print(f"📂 Pasta de saída: {output_path}")
        print(f"🔍 Campo usado para nomes: '{name_field}'")
        print("\n🔄 Iniciando separação...")
        
        # Contadores
        success_count = 0
        error_count = 0
        
        # Separar por município
        for idx, row in gdf.iterrows():
            municipio_name = row[name_field]
            normalized_name = normalize_municipio_name(municipio_name)
            
            if not normalized_name:
                print(f"⚠️  Nome vazio para linha {idx}, pulando...")
                continue
            
            # Criar GeoDataFrame com apenas este município
            single_municipio = gdf.iloc[[idx]]
            
            # Nome do arquivo
            output_file = output_path / f"{normalized_name}.zip"
            
            try:
                # Salvar como shapefile (zip)
                single_municipio.to_file(output_file, driver='ESRI Shapefile')
                print(f"✅ {municipio_name} → {normalized_name}.zip")
                success_count += 1
                
            except Exception as e:
                print(f"❌ Erro ao salvar {municipio_name}: {e}")
                error_count += 1
        
        print(f"\n🎉 Processo concluído!")
        print(f"✅ Sucessos: {success_count}")
        print(f"❌ Erros: {error_count}")
        print(f"📁 Shapefiles salvos em: {output_path}")
        
        # Criar arquivo de mapeamento
        mapping_file = output_path / "municipios_mapping.csv"
        mapping_data = []
        
        for idx, row in gdf.iterrows():
            municipio_name = row[name_field]
            normalized_name = normalize_municipio_name(municipio_name)
            if normalized_name:
                mapping_data.append({
                    'municipio_original': municipio_name,
                    'arquivo_shapefile': f"{normalized_name}.zip"
                })
        
        mapping_df = pd.DataFrame(mapping_data)
        mapping_df.to_csv(mapping_file, index=False, encoding='utf-8')
        print(f"📋 Mapeamento salvo em: {mapping_file}")
        
    except Exception as e:
        print(f"❌ Erro ao carregar shapefile: {e}")
        return

def main():
    """Função principal"""
    print("🗺️  Separador de Shapefiles de Municípios Portugueses")
    print("=" * 50)
    
    # Configurações
    input_shapefile = input("📁 Caminho para o shapefile geral de Portugal: ").strip()
    output_dir = input("📂 Pasta de saída (padrão: static/shapefiles): ").strip()
    name_field = input("🏷️  Campo com nomes dos municípios (padrão: NAME_2): ").strip()
    
    # Valores padrão
    if not output_dir:
        output_dir = "static/shapefiles"
    if not name_field:
        name_field = "NAME_2"
    
    # Verificar se o arquivo existe
    if not os.path.exists(input_shapefile):
        print(f"❌ Arquivo não encontrado: {input_shapefile}")
        return
    
    # Executar separação
    split_shapefiles(input_shapefile, output_dir, name_field)

if __name__ == "__main__":
    main()
