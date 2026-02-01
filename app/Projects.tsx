export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">プロジェクト</h2>

      <div className="space-y-6">

        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900">
            AI翻訳チャットアプリ（開発中）
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Next.js・TypeScript・Tailwind を使って開発している翻訳チャットアプリです。
            環境構築やフォルダ構成の整理、PowerShell を使ったトラブルシューティングを丁寧に行いながら、
            「使いやすく、動作が安定した翻訳体験」を目指して開発を進めています。
            今後は UI の改善や翻訳精度の向上、履歴管理などの機能追加を予定しています。
          </p>
        </div>

      </div>
    </section>
  );
}
