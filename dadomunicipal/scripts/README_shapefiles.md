# 🗺️ Separador de Shapefiles de Municípios Portugueses

Este script separa um shapefile geral de Portugal em 308 shapefiles individuais (um para cada município).

## 📋 Pré-requisitos

### Opção 1: Python (Recomendado)
```bash
pip install geopandas pandas
```

### Opção 2: QGIS (Interface gráfica)
- Baixar e instalar [QGIS](https://qgis.org/)

## 🚀 Como usar

### Método 1: Script Python (Automático)

1. **Coloque seu shapefile geral** na pasta do projeto
2. **Execute o script:**
   ```bash
   cd dadomunicipal/scripts
   python split_shapefiles.py
   ```
3. **Siga as instruções** no terminal:
   - Caminho para o shapefile geral
   - Pasta de saída (padrão: `static/shapefiles`)
   - Campo com nomes dos municípios (padrão: `NAME_2`)

### Método 2: QGIS (Manual)

1. **Open QGIS**
2. **Load the general shapefile** of Portugal
3. **Processing** → **Toolbox** → **Vector** → **Vector tools** → **Split vector layer**
4. **Configure:**
   - **Input layer**: your general shapefile
   - **Split field**: field with municipality names (e.g., `NAME_2`)
   - **Output folder**: `dadomunicipal/static/shapefiles/`
   - **Output file type**: **ESRI Shapefile** (default)
5. **Run**

## 📁 Estrutura de saída

Após a execução, você terá:

```
dadomunicipal/static/shapefiles/
├── evora.zip
├── lisboa.zip
├── porto.zip
├── ...
├── municipios_mapping.csv
└── [308 arquivos .zip]
```

## 🔍 Verificar campos disponíveis

Se não souber qual campo usar para os nomes dos municípios:

1. **In QGIS:** Right-click on the layer → **Open attribute table**
2. **No Python:**
   ```python
   import geopandas as gpd
   gdf = gpd.read_file('seu_shapefile.shp')
   print(list(gdf.columns))
   ```

## 📋 Campos comuns

- `NAME_2` - Nome do município (mais comum)
- `MUNICIPIO` - Nome do município
- `NOME` - Nome do município
- `CONCELHO` - Nome do concelho

## ⚠️ Problemas comuns

### "Campo não encontrado"
- Verifique o nome exato do campo na tabela de atributos
- Os nomes são case-sensitive

### "Erro ao salvar"
- Verifique se tem permissões de escrita na pasta de saída
- Certifique-se de que há espaço suficiente no disco

### "Nome vazio"
- Alguns municípios podem ter nomes vazios no campo
- O script pula esses casos automaticamente

## 🎯 Resultado final

Após a separação, o botão de download na sua aplicação funcionará automaticamente:

- ✅ **Município encontrado**: Download do shapefile
- ❌ **Município não encontrado**: Mensagem "Shapefile não disponível"

## 📞 Suporte

Se tiver problemas:
1. Verifique se o shapefile geral está correto
2. Confirme o nome do campo com os nomes dos municípios
3. Teste com um município específico primeiro
