#!/usr/bin/env python3
"""
Script para verificar quais municípios podem estar faltando.
Compara os arquivos .shp encontrados com uma lista de referência.
"""

import os
from pathlib import Path

def check_missing_municipios():
    """Verifica quais municípios podem estar faltando"""
    
    # Lista de referência dos 308 municípios de Portugal (2021)
    municipios_referencia = [
        "Abrantes", "Águeda", "Aguiar da Beira", "Alandroal", "Albergaria-a-Velha", 
        "Albufeira", "Alcácer do Sal", "Alcanena", "Alcobaça", "Alcochete", 
        "Alcoutim", "Alenquer", "Alfândega da Fé", "Alijó", "Aljezur", 
        "Aljustrel", "Almada", "Almeida", "Almeirim", "Almodôvar", 
        "Alpiarça", "Alter do Chão", "Alvaiázere", "Alvito", "Amarante", 
        "Amares", "Amadora", "Anadia", "Angra do Heroísmo", "Ansião", 
        "Arcos de Valdevez", "Arganil", "Armamar", "Arouca", "Arraiolos", 
        "Arronches", "Arruda dos Vinhos", "Aveiro", "Avis", "Azambuja", 
        "Baião", "Barcelos", "Barrancos", "Barreiro", "Batalha", 
        "Beja", "Belmonte", "Benavente", "Bombarral", "Borba", 
        "Boticas", "Braga", "Bragança", "Cabeceiras de Basto", "Cadaval", 
        "Caldas da Rainha", "Calheta", "Câmara de Lobos", "Caminha", 
        "Campo Maior", "Cantanhede", "Carrazeda de Ansiães", "Carregal do Sal", 
        "Cartaxo", "Cascais", "Castanheira de Pêra", "Castelo Branco", 
        "Castelo de Paiva", "Castelo de Vide", "Castro Daire", "Castro Marim", 
        "Castro Verde", "Celorico da Beira", "Celorico de Basto", "Chamusca", 
        "Chaves", "Cinfães", "Coimbra", "Condeixa-a-Nova", "Constância", 
        "Coruche", "Corvo", "Covilhã", "Crato", "Cuba", 
        "Elvas", "Entroncamento", "Espinho", "Esposende", "Estarreja", 
        "Estremoz", "Évora", "Fafe", "Faro", "Felgueiras", 
        "Ferreira do Alentejo", "Ferreira do Zêzere", "Figueira da Foz", "Figueira de Castelo Rodrigo", 
        "Figueiró dos Vinhos", "Fornos de Algodres", "Freixo de Espada à Cinta", "Fronteira", 
        "Funchal", "Gavião", "Góis", "Golegã", "Gondomar", 
        "Grândola", "Guarda", "Horta", "Idanha-a-Nova", "Ílhavo", 
        "Lagoa", "Lagos", "Lajes das Flores", "Lajes do Pico", "Lamego", 
        "Leiria", "Lisboa", "Loulé", "Loures", "Lousã", 
        "Lousada", "Macedo de Cavaleiros", "Machico", "Madalena", "Mafra", 
        "Maia", "Mangualde", "Manteigas", "Marco de Canaveses", "Marinha Grande", 
        "Marvão", "Matosinhos", "Mação", "Mêda", "Melgaço", 
        "Mértola", "Mesão Frio", "Mira", "Miranda do Corvo", "Miranda do Douro", 
        "Mirandela", "Mogadouro", "Moimenta da Beira", "Moita", "Monchique", 
        "Monção", "Monforte", "Montalegre", "Montemor-o-Novo", "Montemor-o-Velho", 
        "Montijo", "Mora", "Mortágua", "Moura", "Mourão", 
        "Murtosa", "Murça", "Nazaré", "Nelas", "Nisa", 
        "Nordeste", "Odemira", "Odivelas", "Oeiras", "Oleiros", 
        "Olhão", "Oliveira de Azeméis", "Oliveira de Frades", "Oliveira do Bairro", "Oliveira do Hospital", 
        "Ourém", "Ourique", "Ovar", "Paços de Ferreira", "Palmela", 
        "Pampilhosa da Serra", "Paredes", "Paredes de Coura", "Pedrógão Grande", "Penacova", 
        "Penafiel", "Penamacor", "Penedono", "Penela", "Peniche", 
        "Peso da Régua", "Pinhel", "Ponta Delgada", "Ponta do Sol", "Ponte da Barca", 
        "Ponte de Lima", "Ponte de Sôr", "Portalegre", "Portel", "Portimão", 
        "Porto", "Porto de Mós", "Porto Moniz", "Porto Santo", "Póvoa de Lanhoso", 
        "Póvoa de Varzim", "Povoação", "Proença-a-Nova", "Redondo", "Reguengos de Monsaraz", 
        "Resende", "Ribeira Brava", "Ribeira de Pena", "Ribeira Grande", "Rio Maior", 
        "Sabrosa", "Sabugal", "Salvaterra de Magos", "Santa Comba Dão", "Santa Cruz", 
        "Santa Cruz da Graciosa", "Santa Cruz das Flores", "Santa Maria da Feira", "Santa Marta de Penaguião", 
        "Santana", "Santarém", "Santiago do Cacém", "Santo Tirso", "São Brás de Alportel", 
        "São João da Madeira", "São João da Pesqueira", "São Pedro do Sul", "São Roque do Pico", "São Vicente", 
        "Sardoal", "Seia", "Seixal", "Sernancelhe", "Serpa", 
        "Sertã", "Sesimbra", "Setúbal", "Sever do Vouga", "Silves", 
        "Sines", "Sintra", "Sobral de Monte Agraço", "Sousel", "Tábua", 
        "Tabuaço", "Tarouca", "Tavira", "Terras de Bouro", "Tomar", 
        "Tondela", "Torre de Moncorvo", "Torres Novas", "Torres Vedras", "Trancoso", 
        "Trofa", "Vagos", "Vale de Cambra", "Valença", "Valongo", 
        "Valpaços", "Velas", "Viana do Alentejo", "Viana do Castelo", "Vidigueira", 
        "Vieira do Minho", "Vila de Rei", "Vila do Bispo", "Vila do Conde", "Vila do Porto", 
        "Vila Flor", "Vila Franca de Xira", "Vila Franca do Campo", "Vila Nova da Barquinha", "Vila Nova de Cerveira", 
        "Vila Nova de Famalicão", "Vila Nova de Foz Côa", "Vila Nova de Gaia", "Vila Nova de Paiva", "Vila Nova de Poiares", 
        "Vila Pouca de Aguiar", "Vila Real", "Vila Real de Santo António", "Vila Verde", "Vila Velha de Ródão", 
        "Vila Viçosa", "Vimioso", "Vinhais", "Viseu", "Vizela", 
        "Vouzela"
    ]
    
    # Pasta onde estão os arquivos .shp
    input_dir = "/Users/isabellamoura/Documents/References_DATA/Proj.Municipios/Concelhos"
    input_path = Path(input_dir)
    
    if not input_path.exists():
        print(f"❌ Pasta não encontrada: {input_dir}")
        return
    
    # Encontrar todos os arquivos .shp
    shp_files = list(input_path.glob("*.shp"))
    municipios_encontrados = [f.stem for f in shp_files]
    
    print(f"📊 Análise de Municípios")
    print("=" * 50)
    print(f"📁 Total de referência: {len(municipios_referencia)}")
    print(f"📁 Total encontrados: {len(municipios_encontrados)}")
    print(f"📁 Diferença: {len(municipios_referencia) - len(municipios_encontrados)}")
    
    # Encontrar municípios faltantes
    municipios_faltantes = []
    for municipio in municipios_referencia:
        if municipio not in municipios_encontrados:
            municipios_faltantes.append(municipio)
    
    if municipios_faltantes:
        print(f"\n❌ Municípios faltantes ({len(municipios_faltantes)}):")
        for municipio in municipios_faltantes:
            print(f"   - {municipio}")
    else:
        print(f"\n✅ Todos os municípios encontrados!")
    
    # Verificar se há municípios extras
    municipios_extras = []
    for municipio in municipios_encontrados:
        if municipio not in municipios_referencia:
            municipios_extras.append(municipio)
    
    if municipios_extras:
        print(f"\n⚠️  Municípios extras ({len(municipios_extras)}):")
        for municipio in municipios_extras:
            print(f"   - {municipio}")
    
    # Verificar possíveis problemas de nomenclatura
    print(f"\n🔍 Verificando possíveis problemas de nomenclatura...")
    
    # Verificar se há diferenças de acentos ou maiúsculas
    municipios_encontrados_lower = [m.lower() for m in municipios_encontrados]
    municipios_referencia_lower = [m.lower() for m in municipios_referencia]
    
    for municipio in municipios_referencia:
        if municipio.lower() not in municipios_encontrados_lower:
            # Procurar por variações
            for encontrado in municipios_encontrados:
                if municipio.lower() in encontrado.lower() or encontrado.lower() in municipio.lower():
                    print(f"   Possível variação: '{municipio}' vs '{encontrado}'")

if __name__ == "__main__":
    check_missing_municipios()
