#!/usr/bin/env python3
"""
Script para organizar shapefiles em pastas por município e criar arquivos ZIP.
Cada município terá sua própria pasta com todos os 5 arquivos do shapefile.
"""

import os
import shutil
import zipfile
from pathlib import Path

def organize_shapefiles(input_dir, output_dir):
    """
    Organiza os shapefiles em pastas por município e cria arquivos ZIP.
    
    Args:
        input_dir (str): Pasta onde estão os arquivos individuais
        output_dir (str): Pasta onde criar as pastas organizadas
    """
    
    input_path = Path(input_dir)
    output_path = Path(output_dir)
    
    if not input_path.exists():
        print(f"❌ Pasta não encontrada: {input_dir}")
        return
    
    # Criar pasta de saída
    output_path.mkdir(parents=True, exist_ok=True)
    
    print(f"📁 Processando pasta: {input_path}")
    print(f"📂 Pasta de saída: {output_path}")
    
    # Agrupar arquivos por município
    municipios = {}
    
    # Encontrar todos os arquivos .shp para identificar municípios
    shp_files = list(input_path.glob("*.shp"))
    
    if not shp_files:
        print("❌ Nenhum arquivo .shp encontrado!")
        return
    
    print(f"✅ Encontrados {len(shp_files)} municípios")
    print("\n🔄 Organizando arquivos...")
    
    success_count = 0
    error_count = 0
    
    for shp_file in shp_files:
        try:
            # Nome do município (sem extensão)
            municipio_name = shp_file.stem
            
            # Criar pasta para o município
            municipio_dir = output_path / municipio_name
            municipio_dir.mkdir(exist_ok=True)
            
            # Encontrar todos os arquivos relacionados
            base_name = shp_file.stem
            related_files = []
            
            # Extensões dos arquivos do shapefile
            extensions = ['.shp', '.shx', '.dbf', '.prj', '.cpg']
            
            for ext in extensions:
                file_path = input_path / f"{base_name}{ext}"
                if file_path.exists():
                    related_files.append(file_path)
            
            # Copiar arquivos para a pasta do município
            for file_path in related_files:
                dest_path = municipio_dir / file_path.name
                shutil.copy2(file_path, dest_path)
            
            # Criar arquivo ZIP
            zip_path = output_path / f"{municipio_name}.zip"
            with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                for file_path in related_files:
                    zipf.write(file_path, file_path.name)
            
            print(f"✅ {municipio_name}: {len(related_files)} arquivos → {municipio_name}.zip")
            success_count += 1
            
        except Exception as e:
            print(f"❌ Erro ao processar {shp_file.name}: {e}")
            error_count += 1
    
    print(f"\n🎉 Processo concluído!")
    print(f"✅ Sucessos: {success_count}")
    print(f"❌ Erros: {error_count}")
    print(f"📁 Pastas criadas em: {output_path}")
    print(f"📦 Arquivos ZIP criados em: {output_path}")
    
    # Listar alguns exemplos
    print(f"\n📋 Exemplos de arquivos criados:")
    zip_files = list(output_path.glob("*.zip"))
    for i, zip_file in enumerate(zip_files[:5]):
        print(f"   {zip_file.name}")
    if len(zip_files) > 5:
        print(f"   ... e mais {len(zip_files) - 5} arquivos ZIP")

def main():
    """Função principal"""
    print("🗂️  Organizador de Shapefiles por Município")
    print("=" * 50)
    
    # Usar o caminho fornecido pelo usuário
    input_dir = "/Users/isabellamoura/Documents/References_DATA/Proj.Municipios/Concelhos"
    output_dir = "/Users/isabellamoura/Documents/References_DATA/Proj.Municipios/Concelhos_Organizados"
    
    print(f"📁 Pasta de entrada: {input_dir}")
    print(f"📂 Pasta de saída: {output_dir}")
    
    # Confirmar antes de executar
    confirm = input("\n❓ Continuar com a organização? (s/n): ").strip().lower()
    
    if confirm in ['s', 'sim', 'y', 'yes']:
        organize_shapefiles(input_dir, output_dir)
    else:
        print("❌ Operação cancelada.")

if __name__ == "__main__":
    main()
