# 🚀 Como Publicar no GitHub Pages e Instalar como App

## 📋 Pré-requisitos
- Conta no GitHub
- Git instalado (já tem ✓)

## 🌐 Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `casamento-carina-daniel` (ou outro nome)
3. **Importante**: Marque como **Público** (necessário para GitHub Pages gratuito)
4. **NÃO** marque "Add a README file"
5. Clique em "Create repository"

## 💻 Passo 2: Publicar seu Código

Abra o terminal nesta pasta e execute:

```bash
# 1. Adicionar o repositório remoto (substitua USERNAME pelo seu usuário GitHub)
git remote add origin https://github.com/USERNAME/casamento-carina-daniel.git

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "feat: adicionar site de casamento com suporte PWA"

# 4. Enviar para o GitHub
git push -u origin main
```

Se pedir usuário e senha:
- **Usuário**: seu username do GitHub
- **Senha**: use um **Personal Access Token** (não a senha)
  - Crie em: https://github.com/settings/tokens
  - Permissões: `repo` (full control)

## ⚙️ Passo 3: Ativar GitHub Pages

1. No GitHub, vá para o repositório
2. Clique em **Settings** (⚙️)
3. No menu lateral, clique em **Pages**
4. Em "Source", selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Clique em **Save**
6. Aguarde 2-3 minutos

🎉 Seu site estará disponível em:
```
https://USERNAME.github.io/casamento-carina-daniel/
```

## 📱 Passo 4: Instalar como App no Celular

### iPhone (iOS - Safari)

1. Abra o site no Safari
2. Toque no botão **Compartilhar** (ícone de seta para cima)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Edite o nome se quiser
5. Toque em **"Adicionar"**

✅ O app aparecerá na tela inicial como um aplicativo nativo!

### Android (Chrome)

1. Abra o site no Chrome
2. Toque nos **3 pontos** (menu)
3. Selecione **"Adicionar à tela inicial"** ou **"Instalar app"**
4. Confirme

✅ O app será instalado como aplicativo nativo!

Ou automaticamente aparecerá um banner sugerindo instalação:
- Toque em **"Adicionar"** ou **"Instalar"**

## 🔧 Passo 5: Converter Ícones SVG para PNG

Os ícones estão em formato SVG. Para melhor compatibilidade, converta para PNG:

### Opção A: Online (mais fácil)
1. Acesse https://cloudconvert.com/svg-to-png
2. Upload `icon-192.svg` e converta para PNG (192x192px)
3. Renomeie para `icon-192.png`
4. Repita com `icon-512.svg` → `icon-512.png` (512x512px)

### Opção B: Usar Canva/Figma
1. Crie um design 192x192px
2. Use as cores do tema: `#8B6F5E` (fundo), `#FAF7F4` (texto)
3. Adicione as iniciais "C&D" e a data "06.09.2026"
4. Exporte como PNG
5. Repita para 512x512px

Depois de criar os PNGs:
```bash
git add icon-192.png icon-512.png
git commit -m "feat: adicionar ícones PNG para PWA"
git push
```

## 🎨 Personalização

### Editar conteúdo do casamento
Edite o arquivo `index.html`, seção `CONFIG` (linhas 12-57):
- Nomes dos noivos
- Data e horário
- Locais
- Cores
- Chave Pix

### Atualizar o site
```bash
git add .
git commit -m "chore: atualizar informações do casamento"
git push
```

O GitHub Pages atualizará automaticamente em 1-2 minutos.

## ✅ Checklist de Publicação

- [ ] Repositório criado no GitHub
- [ ] Código enviado com `git push`
- [ ] GitHub Pages ativado em Settings
- [ ] Site acessível em `https://USERNAME.github.io/...`
- [ ] Ícones PNG criados e enviados
- [ ] Testado instalação no iPhone
- [ ] Testado instalação no Android
- [ ] Conteúdo personalizado (nomes, data, etc)
- [ ] Chave Pix atualizada

## 🐛 Problemas Comuns

### Site não aparece
- Aguarde 5 minutos após ativar GitHub Pages
- Verifique se o branch é `main` (não `master`)
- Certifique-se que o repositório é **público**

### App não oferece instalação
- Verifique se está usando HTTPS (GitHub Pages usa automaticamente)
- Certifique-se que os ícones PNG existem
- Teste em modo anônimo/privado do navegador

### Erro ao fazer push
- Use Personal Access Token em vez de senha
- Configure credenciais: `git config credential.helper store`

## 📞 Compartilhar com Convidados

Depois de publicado, compartilhe o link:
```
https://USERNAME.github.io/casamento-carina-daniel/
```

💡 **Dica**: Crie um QR Code do link usando https://www.qr-code-generator.com/
e adicione aos convites físicos!

## 🔐 Domínio Personalizado (Opcional)

Quer usar `casamento.seudominio.com`?

1. Compre um domínio (Registro.br, GoDaddy, etc)
2. Em GitHub Pages Settings, adicione o "Custom domain"
3. Configure DNS:
   ```
   Tipo: CNAME
   Nome: casamento
   Valor: USERNAME.github.io
   ```
4. Aguarde propagação (até 48h)

---

🎊 **Pronto!** Seu site de casamento está no ar e pode ser instalado como app!

Para dúvidas: https://docs.github.com/pages
