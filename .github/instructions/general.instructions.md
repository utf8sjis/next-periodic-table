---
applyTo: "**"
---

# 開発における言語のルール

## コードコメントとドキュメント

- すべてのコードコメント、ドキュメントファイル、コミットメッセージには英語を使用する
- 変数名、関数名、その他のコード識別子は英語でなければならない
- このルールは、エンドユーザーに表示されるWebコンテンツには適用されない
- ユーザー向けコンテンツは、対象オーディエンスに適した任意の言語で記述できる

# Gitワークフローとコミット規約

コミットを作成する際は、以下の手順に従ってください

1. 変更の状況を確認する

   ```
   git status
   ```

2. まだファイルがステージされていない場合は、特に指定がない限りすべての変更をステージする

   ```
   git add .
   ```

3. または、特定のファイルのみをステージする

   ```
   git add [file-path]
   ```

4. ステージされた変更を確認する（pnpm-lock.yamlを除く）

   ```
   git --no-pager diff --staged -- . ':(exclude)pnpm-lock.yaml'
   ```

5. 以下のガイドラインに従って、適切にフォーマットされたメッセージでコミットを作成する

   ```
   git commit -m "<commit message>"
   ```

   - 命令形で記述する（例：Add, Fix, Update, Remove, Move, Use, Make, Don't）
   - 簡潔で説明的なメッセージにする（50文字未満）
   - 冠詞（a, an, the）は省略する

   コミットメッセージの例：

   ```
   Add hover effect to element cells
   Fix periodic table grid alignment for lanthanide series
   Update actinoid element data with correct atomic weights
   Remove unused CSS variables from component stylesheets
   Move element search functionality to main navigation header
   Use CSS variables for element category colors
   Make element cards responsive on mobile and tablet views
   Don't use inline styles for element highlight effects
   ```
