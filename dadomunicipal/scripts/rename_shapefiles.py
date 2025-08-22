#!/usr/bin/env python3
"""
Script para renomear shapefiles removendo o prefixo NAME_2_
e mantendo os nomes originais com acentos e maiúsculas.
"""

import os
import glob
from pathlib import Path

def rename_shapefiles(input_dir):
    """
    Renomeia os shapefiles removendo o prefixo NAME_2_
    
    Args:
        input_dir (str): Pasta onde estão os shapefiles
    """
    
    input_path = Path(input_dir)
    
    if not input_path.exists():
        print(f"❌ Pasta não encontrada: {input_dir}")
        return
    
    print(f"📁 Processando pasta: {input_path}")
    print("🔄 Procurando arquivos com prefixo 'NAME_2_'...")
    
    # Encontrar todos os arquivos que começam com NAME_2_
    pattern = input_path / "NAME_2_*"
    files = list(input_path.glob("NAME_2_*"))
    
    if not files:
        print("❌ Nenhum arquivo com prefixo 'NAME_2_' encontrado!")
        return
    
    print(f"✅ Encontrados {len(files)} arquivos para renomear")
    print("\n🔄 Iniciando renomeação...")
    
    success_count = 0
    error_count = 0
    
    for file_path in files:
        try:
            # Extrair o nome original (remover NAME_2_)
            original_name = file_path.name
            new_name = original_name.replace("NAME_2_", "")
            
            # Criar novo caminho
            new_path = file_path.parent / new_name
            
            # Verificar se já existe um arquivo com esse nome
            if new_path.exists():
                print(f"⚠️  Arquivo já existe: {new_name}")
                continue
            
            # Renomear o arquivo
            file_path.rename(new_path)
            print(f"✅ {original_name} → {new_name}")
            success_count += 1
            
        except Exception as e:
            print(f"❌ Erro ao renomear {file_path.name}: {e}")
            error_count += 1
    
    print(f"\n🎉 Processo concluído!")
    print(f"✅ Sucessos: {success_count}")
    print(f"❌ Erros: {error_count}")
    
    # Listar alguns arquivos renomeados como exemplo
    print(f"\n📋 Exemplos de arquivos renomeados:")
    renamed_files = list(input_path.glob("*"))
    for i, file in enumerate(renamed_files[:5]):
        print(f"   {file.name}")
    if len(renamed_files) > 5:
        print(f"   ... e mais {len(renamed_files) - 5} arquivos")

def main():
    """Função principal"""
    print("🔄 Renomeador de Shapefiles")
    print("=" * 40)
    
    # Usar o caminho fornecido pelo usuário
    input_dir = "/Users/isabellamoura/Documents/References_DATA/Proj.Municipios/Concelhos"
    
    print(f"📁 Pasta de entrada: {input_dir}")
    
    # Confirmar antes de executar
    confirm = input("\n❓ Continuar com a renomeação? (s/n): ").strip().lower()
    
    if confirm in ['s', 'sim', 'y', 'yes']:
        rename_shapefiles(input_dir)
    else:
        print("❌ Operação cancelada.")

if __name__ == "__main__":
    main()
