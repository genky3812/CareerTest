// 質問のデータ（44個）
const questions = [
    // バイヤー
    { text: "商品を選ぶ時、安さと品質のどちらも重視する方ですか？", department: "バイヤー" },
    { text: "買い物をする時、棚や商品の並べ方が気になることがありますか？", department: "バイヤー" },
    { text: "新しい商品や話題のアイテムをチェックするのが好きですか？", department: "バイヤー" },
    { text: "友達に「お得な商品をよく知っているね」と言われることがありますか？", department: "バイヤー" },

    // 物流部
    { text: "複数の予定を整理して効率的に行動するのが得意ですか？", department: "物流部" },
    { text: "地図や配置図を見て、動きやすい動線を考えるのが好きですか？", department: "物流部" },
    { text: "チームで計画を進める時、まとめ役になることが多いですか？", department: "物流部" },
    { text: "トラックや物流の仕組みに興味を持ったことがありますか？", department: "物流部" },

    // 営業企画部
    { text: "SNSや広告で、人を引きつけるアイデアを考えるのが好きですか？", department: "営業企画部" },
    { text: "ポスターやチラシを見て「もっと良くできそう」と思うことがありますか？", department: "営業企画部" },
    { text: "友達と話し合いながら、アイデアを出すのが得意ですか？", department: "営業企画部" },
    { text: "お客様に商品の良さを伝える方法を考えるのが楽しいですか？", department: "営業企画部" },

    // IT部
    { text: "PCやアプリを使いこなすのが得意だと感じますか？", department: "IT部" },
    { text: "新しいシステムやツールを試すのがワクワクしますか？", department: "IT部" },
    { text: "コツコツと作業を進めるのが得意ですか？", department: "IT部" },
    { text: "効率的な方法や便利な仕組みを考えるのが好きですか？", department: "IT部" },

    // 店舗開発部
    { text: "街を歩いていて、「ここに新しいお店があったら便利だな」と考えることがありますか？", department: "店舗開発部" },
    { text: "初めて会う人とすぐに仲良くなれる自信がありますか？", department: "店舗開発部" },
    { text: "長期的な計画を立てて実行するのが得意ですか？", department: "店舗開発部" },
    { text: "地図や土地を見るのが好きで、「この場所は魅力的だな」と思うことがありますか？", department: "店舗開発部" },

    // 商品開発部
    { text: "友達に「ユニークなアイデアを考えるのが得意だね」と言われたことがありますか？", department: "商品開発部" },
    { text: "トレンドや流行を日常的にチェックしていますか？", department: "商品開発部" },
    { text: "新しい商品を見ると「どうやって作ったのかな？」と興味を持ちますか？", department: "商品開発部" },
    { text: "誰かが困っている時、「こうすれば解決できるのに」と考えることが多いですか？", department: "商品開発部" },

    // 人材開発部
    { text: "周りの友達の相談を聞いたり、サポートするのが好きですか？", department: "人材開発部" },
    { text: "新しい人と話す時、すぐに打ち解けられる方ですか？", department: "人材開発部" },
    { text: "イベントの準備や企画を任されることが多いですか？", department: "人材開発部" },
    { text: "人の成長をサポートすることに喜びを感じますか？", department: "人材開発部" },

    // 在庫コントロール部
    { text: "データや数字を使って計画を立てるのが得意ですか？", department: "在庫コントロール部" },
    { text: "「必要なものを必要な時に届ける仕組み」を考えるのが好きですか？", department: "在庫コントロール部" },
    { text: "物事を計画的に進めるのが得意だと思いますか？", department: "在庫コントロール部" },
    { text: "トラブルが起きた時に、柔軟に対応できる自信がありますか？", department: "在庫コントロール部" },

    // 労務管理部
    { text: "周りの人の話をじっくり聞いて、サポートすることが得意ですか？", department: "労務管理部" },
    { text: "職場や仲間の雰囲気を良くする工夫をするのが好きですか？", department: "労務管理部" },
    { text: "みんなが働きやすい環境を作ることに興味がありますか？", department: "労務管理部" },
    { text: "困っている人を見ると、自分から手を差し伸べることが多いですか？", department: "労務管理部" },

    // 経理部
    { text: "数字や計算が得意で、むしろ好きだと感じますか？", department: "経理部" },
    { text: "お金の管理や帳簿を整理することに抵抗を感じませんか？", department: "経理部" },
    { text: "細かい作業をコツコツ進めることが得意だと思いますか？", department: "経理部" },
    { text: "アルバイトやサークルで、予算や経費を管理した経験がありますか？", department: "経理部" },

    // 店舗運営部
    { text: "アルバイトやサークルで、チームのまとめ役をすることが好きですか？", department: "店舗運営部" },
    { text: "お客様や友達と直接話し、信頼関係を築くことが得意だと思いますか？", department: "店舗運営部" },
    { text: "イベントや活動で、配置やレイアウトを工夫するのが好きですか？", department: "店舗運営部" },
    { text: "トラブルが起きた時に、すぐに解決する方法を考えて行動しますか？", department: "店舗運営部" }
];

// スコア管理
let currentQuestionIndex = 0;
let scores = {
    "人材開発部": 0,
    "店舗開発部": 0,
    "IT部": 0,
    "商品開発部": 0,
    "バイヤー": 0,
    "店舗運営部": 0,
    "経理部": 0,
    "労務管理部": 0,
    "在庫コントロール部": 0,
    "営業企画部": 0,
    "物流部": 0,


};

// HTML要素の取得
const titleScreen = document.getElementById('title-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionContainer = document.getElementById('question-container');
const yesButton = document.getElementById('yesBtn');
const neutralButton = document.getElementById('neutralBtn');
const noButton = document.getElementById('noBtn');
const backButton = document.getElementById('backBtn');
const resultContainer = document.getElementById('result');
const startButton = document.getElementById('startBtn');
const restartButton = document.getElementById('restartBtn');

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// タイトル画面を表示
function showTitleScreen() {
    shuffleArray(questions); // 質問をシャッフル
    titleScreen.style.display = 'block';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';

    // タイトル画面にイラストを追加
    titleScreen.innerHTML = `
        <img src="title_screen_chibi.png" alt="タイトル画面イラスト" style="width: 80%; margin-bottom: 20px;">
        <h1>部署適性診断</h1>
        <button class="btn" id="startBtn">スタート</button>
    `;
    document.getElementById('startBtn').addEventListener('click', showQuestionScreen);
}

// 質問画面を表示
function showQuestionScreen() {
    titleScreen.style.display = 'none';
    questionScreen.style.display = 'block';
    resultScreen.style.display = 'none';
    showQuestion();
}

// 質問を表示する関数
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionContainer.textContent = `${currentQuestionIndex + 1}/${questions.length}: ${questions[currentQuestionIndex].text}`; // 質問を更新
        backButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none'; // 戻るボタン
    } else {
        showResultScreen(); // 結果画面を表示
    }
}

// 結果画面を表示する関数
function showResultScreen() {
    const maxScore = Math.max(...Object.values(scores)); // 最大スコアを取得
    const topDepartments = Object.keys(scores).filter(
        key => scores[key] === maxScore // 最大スコアと同じ部署を抽出
    );

    // ランダムに1つ選択
    const topDepartment = topDepartments[Math.floor(Math.random() * topDepartments.length)];
    const illustrationPath = departmentIllustrations[topDepartment];
 // 部署に対応するイラストのパスを取得

    titleScreen.style.display = 'none';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    resultContainer.innerHTML = `
        <img src="${illustrationPath}" alt="${topDepartment}" style="width: 80%; margin-bottom: 20px;">
        <p>あなたに最適な部署は <strong>${topDepartment}</strong> です！</p>
        <p>説明: ${getDescription(topDepartment)}</p>
    `;
}
//イラスト
const departmentIllustrations = {
    "人材開発部": "recruiter_chibi.png",
    "店舗開発部": "store_development_chibi.png",
    "IT部": "it_department_chibi.png",
    "商品開発部": "product_development_chibi.png",
    "バイヤー": "buyer_chibi.png",
    "店舗運営部": "store_operations_chibi.png",
    "経理部": "accounting_chibi.png",
    "労務管理部": "hr_chibi.png",
    "在庫コントロール部": "inventory_control_chibi.png",
    "営業企画部": "sales_planning_chibi.png",
    "物流部": "logistics_chibi.png"
};


// 部署の説明を取得する関数
function getDescription(department) {
    const departmentDescriptions = {
    "人材開発部": `
        <h3 style="font-size: 1.5em; color: #6A5ACD;">✨ あなたのタイプ: ヒューマンサポーター ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは人を支え、導く力を持つ「ヒューマンサポーター」タイプです！
            人材開発部では、社員の成長を支援し、職場の雰囲気を改善する役割を担います。
            人と関わることが得意なあなたは、コミュニケーション力を活かして、チーム全体を前進させる力を発揮するでしょう。
        </p>

        <h4 style="font-size: 1.3em; color: #483D8B; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>他人の気持ちを理解する共感力</li>
            <li>チーム全体を調和させるサポート力</li>
            <li>自己成長に対するモチベーションの高さ</li>
        </ul>
    `,
    "店舗開発部": `
        <h3 style="font-size: 1.5em; color: #228B22;">✨ あなたのタイプ: ビジョンビルダー ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは未来を描き出す計画力に優れた「ビジョンビルダー」タイプです！
            店舗開発部では、新しい店舗の立地を選び、地域社会に新しい価値を提供します。
            持ち前の交渉力と計画力で、困難なプロジェクトもやり遂げるでしょう。
        </p>

        <h4 style="font-size: 1.3em; color: #006400; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>地域のニーズを見抜く洞察力</li>
            <li>長期的な計画を実現する推進力</li>
            <li>柔軟な対応力と交渉スキル</li>
        </ul>
    `,
    "IT部": `
        <h3 style="font-size: 1.5em; color: #007BFF;">✨ あなたのタイプ: テクノロジーカタリスト ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは効率を追求し、課題を解決する「テクノロジーカタリスト」タイプです！
            IT部では、最新技術を駆使して業務を効率化し、システム全体を最適化する役割を担います。
            問題解決能力と創造力で、業務改善を実現する力があります。
        </p>

        <h4 style="font-size: 1.3em; color: #0056B3; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>💡 新しい技術を試す好奇心</li>
            <li>⚙️ 効率化を追求する思考力</li>
            <li>🧩 ロジカルで正確な問題解決力</li>
        </ul>
    `,
    "商品開発部": `
        <h3 style="font-size: 1.5em; color: #FF6347;">✨ あなたのタイプ: イノベーター ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは創造力豊かでチャレンジ精神旺盛な「イノベーター」タイプです！
            商品開発部では、新しいアイデアを形にして、お客様に喜ばれる商品を生み出します。
            あなたの発想力と実行力は、多くの人に影響を与えるでしょう。
        </p>

        <h4 style="font-size: 1.3em; color: #CD5C5C; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>常識にとらわれない発想力</li>
            <li>流行をキャッチする感性</li>
            <li>困難を乗り越える強い意志</li>
        </ul>
    `,
    "バイヤー": `
        <h3 style="font-size: 1.5em; color: #FFA500;">✨ あなたのタイプ: トレンドハンター ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは分析力と直感を兼ね備えた「トレンドハンター」タイプです！
            バイヤーとして、市場を調査し、商品の魅力を引き出す才能を持っています。
            トレンドを先取りし、交渉力を活かして最適な商品を選定します。
        </p>

        <h4 style="font-size: 1.3em; color: #FF8C00; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>トレンドを読む洞察力</li>
            <li>商品価値を見抜くセンス</li>
            <li>交渉力と決断力</li>
        </ul>
    `,
    "店舗運営部": `
        <h3 style="font-size: 1.5em; color: #228B22;">✨ あなたのタイプ: 現場マスター ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは現場をまとめる力を持つ「現場マスター」タイプです！
            店舗運営部では、店舗の効率的な運営とスタッフの管理を担当します。
            あなたのリーダーシップで、現場の課題を解決し、全体を成功に導くでしょう。
        </p>

        <h4 style="font-size: 1.3em; color: #006400; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>現場の問題を解決する柔軟性</li>
            <li>チームをまとめるリーダーシップ</li>
            <li>お客様との信頼関係を築く能力</li>
        </ul>
    `,
    "経理部": `
        <h3 style="font-size: 1.5em; color: #4682B4;">✨ あなたのタイプ: ナンバーガーディアン ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは正確さを追求し、数字を得意とする「ナンバーガーディアン」タイプです！
            経理部では、会社の資金を管理し、経営を数字で支える重要な役割を担います。
            あなたの緻密な作業力が組織全体の基盤を支えます。
        </p>

        <h4 style="font-size: 1.3em; color: #4169E1; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>数字やデータを正確に処理する力</li>
            <li>コツコツと積み重ねる作業力</li>
            <li>資金管理に対する責任感</li>
        </ul>
    `,
    "労務管理部": `
        <h3 style="font-size: 1.5em; color: #8B4513;">✨ あなたのタイプ: ケアテイカー ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは周囲を支える「ケアテイカー」タイプです！
            労務管理部では、社員の働きやすい環境を整備し、職場の改善を推進します。
            人のサポートを得意とし、誰もが快適に働ける環境作りを支援します。
        </p>

        <h4 style="font-size: 1.3em; color: #A0522D; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>職場の雰囲気を良くする調整力</li>
            <li>他人を気遣う思いやり</li>
            <li>問題解決に向けた柔軟性</li>
        </ul>
    `,
    "在庫コントロール部": `
        <h3 style="font-size: 1.5em; color: #708090;">✨ あなたのタイプ: ロジスティックプランナー ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは正確さと柔軟性を兼ね備えた「ロジスティックプランナー」タイプです！
            在庫コントロール部では、商品を適切な量で管理し、スムーズな流通を実現します。
            論理的な思考力と計画性を活かして、在庫管理の最適化を行います。
        </p>

        <h4 style="font-size: 1.3em; color: #2F4F4F; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>データをもとにした計画力</li>
            <li>トラブル時の柔軟な対応力</li>
            <li>システム全体を見渡す視野</li>
        </ul>
    `,
    "営業企画部": `
        <h3 style="font-size: 1.5em; color: #D2691E;">✨ あなたのタイプ: クリエイティブコミュニケーター ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは創意工夫を重ねる「クリエイティブコミュニケーター」タイプです！
            営業企画部では、広告やプロモーションを企画し、商品の魅力を伝える役割を担います。
            あなたのアイデア力と表現力は、多くの人の心を動かします。
        </p>

        <h4 style="font-size: 1.3em; color: #8B4513; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>商品の魅力を伝える表現力</li>
            <li>斬新なアイデアを生み出す創造力</li>
            <li>チームで協力するコミュニケーション力</li>
        </ul>
    `,
    "物流部": `
        <h3 style="font-size: 1.5em; color: #4682B4;">✨ あなたのタイプ: オペレーションマエストロ ✨</h3>
        <p style="font-size: 1.1em; line-height: 1.8;">
            あなたは計画性と実行力を持つ「オペレーションマエストロ」タイプです！
            物流部では、商品を効率よく届ける仕組みを整備し、流通全体を支えます。
            チームを調整し、最適な方法を見つける能力があります。
        </p>

        <h4 style="font-size: 1.3em; color: #4169E1; margin-top: 20px;">🌟 あなたの活躍ポイント 🌟</h4>
        <ul style="font-size: 1.1em; line-height: 1.8; padding-left: 20px;">
            <li>物流の流れを最適化する力</li>
            <li>チームを調整するリーダーシップ</li>
            <li>問題解決に向けた迅速な対応力</li>
        </ul>
    `
};

// 指定された部署に該当する説明を返却、存在しない場合は "詳細不明"
    return departmentDescriptions[department] || "詳細不明";
}

function adjustResultStyles() {
    const illustration = document.getElementById('result-illustration');
    const resultScreen = document.getElementById('result-screen');
    const screenHeight = window.innerHeight;



    if (screenWidth < 600) {
        illustration.style.maxWidth = '90%'; /* スマホ向け調整 */
        illustration.style.height = 'auto';
    } else if (screenWidth < 900) {
        illustration.style.maxWidth = '80%'; /* タブレット向け調整 */
        illustration.style.height = 'auto';
    } else {
        illustration.style.maxWidth = '70%'; /* PC向け調整 */
        illustration.style.height = 'auto';
    }
}

// ページロード時とリサイズ時に適用
window.addEventListener('load', adjustResultStyles);
window.addEventListener('resize', adjustResultStyles);

// ボタンのクリックイベント設定
yesButton.addEventListener('click', () => {
    scores[questions[currentQuestionIndex].department] += 2;
    currentQuestionIndex++;
    showQuestion();
});

neutralButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

noButton.addEventListener('click', () => {
    scores[questions[currentQuestionIndex].department] -= 2;
    currentQuestionIndex++;
    showQuestion();
});

backButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    Object.keys(scores).forEach(key => scores[key] = 0); // スコアをリセット
    showTitleScreen();
});

// 初期化
showTitleScreen();
