// ══════════════════════════════════════════════
//  CHRONOS — データファイル
//  ここを編集してデータを追加・修正します
//
//  EVENTS: 出来事の配列
//    year    : 年 (数値)
//    date    : 月日 (文字列, 不明なら null)
//    cat     : カテゴリ (下記参照)
//    text    : 出来事の説明
//    person  : 人物名 (PERSONS のキーと一致させる, なければ null)
//    nameAlt : 別名・原語表記 （なければ null）
//    country : 国・地域 (ロシア/イギリス/フランス/イタリア/ドイツ/オーストリア/アメリカ/デンマーク など)
//    place   : 地名（パリ/ロンドン　など。わからなければ null）
//    type    : "birth" / "death" / "event"
//
//  カテゴリ一覧:
//    政治（国内）/ 政治（国際）/ 法 / 要人 / 社会 / 宗教 /
//    思想 / 文学 / 音楽 / 舞台芸術 / 美術 / 科学技術 / メディア
//
//  PERSONS: 人物辞書
//    キー    : 人物名 (EVENTSのpersonと一致)
//    born    : 生年 (文字列)
//    died    : 没年 (文字列, なければ null)
//    country : 国
//    cat     : カテゴリ
//    nameAlt : 別名・原語表記 
//    bio     : 説明文 (任意, HTMLも可)
//    links   : 関連人物の名前の配列 (任意)
//    notes   : メモ (任意)
// ══════════════════════════════════════════════

const EVENTS = [

  // ―― 1774 ――
  { year:1774, date:"5月10日", cat:"政治（国内）", text:"即位", person:"ルイ16世", nameAlt:"Louis XVI", country:"フランス", place:null, type:"event" },
  { year:1774, date:"7月21日", cat:"政治（国際）", text:"キュチュク-カルナイジ条約　第1次露土戦争講和", person:null, nameAlt:"Кючук-Кайнарджийский мир", country:"ロシア/トルコ", place:"", type:"event" },
  { year:1774, date:"5月6日", cat:"要人", text:"生誕", person:"クリストフォル・リーヴェン伯", nameAlt:"Христофор Андреевич Ливен", country:"ロシア", place:null, type:"birth" },
  { year:1774, date:"11月27日", cat:"要人", text:"生誕　大臣", person:"エゴール・フランツェヴィチ・カンクリン", nameAlt:"Егор Францевич Канкрин", country:"ドイツ", place:"ヘッセン", type:"birth" },

  // ―― 1775 ――
  { year:1775, date:"4月14日", cat:"政治（国内）", text:"フィラデルフィア協会、創設　最初の反奴隷制度活動団体", person:null, nameAlt:null, country:"アメリカ", place:"フィラデルフィア", type:"event" },
  { year:1775, date:"4月19日", cat:"政治（国際）", text:"アメリカ独立戦争、開始　～1783年9月3日", person:null, nameAlt:null, country:"アメリカVSイギリス", place:null, type:"event" },
  { year:1775, date:"10月12日", cat:"要人", text:"生誕　牧師", person:"ライマン・ビーチャー", nameAlt:"Lyman Beecher", country:"アメリカ", place:"コネティカット", type:"birth" },
  { year:1775, date:"1月27日", cat:"思想", text:"生誕", person:"フリードリヒ・シェリング", nameAlt:"Friedrich Wilhelm Joseph von Schelling", country:"ドイツ", place:"ヴュルテンベルク", type:"birth" },
  { year:1775, date:"1月30日", cat:"文学", text:"生誕", person:"ウォルター・サヴェージ・ランダー", nameAlt:"Walter Savage Landor", country:"イギリス", place:"ウォリック", type:"birth" },
  { year:1775, date:"11月12日", cat:"思想", text:"生誕", person:"ミハイル・カチェノフスキー", nameAlt:"Михаил Трофимович Каченовский", country:"ウクライナ", place:"ハルキウ", type:"birth" },

  // ―― 1776 ――
  { year:1776, date:"7月4日", cat:"政治（国内）", text:"アメリカ独立宣言", person:null, nameAlt:"United States Declaration of Independence", country:"アメリカ", place:null, type:"event" },
  { year:1776, date:null, cat:"思想", text:"『アメリカ人奴隷に関する対話』", person: "サミュエル・ホプキンス", nameAlt:"Samuel Hopkins", country:"アメリカ", place:"『アメリカ人奴隷に関する対話』", type:"event" },
  { year:1776, date:"7月26日", cat:"文学", text:"生誕", person:"レフ・ネヴァホーヴィチ", nameAlt:"Лев Николаевич Невахович", country:"ポーランド", 
  place:"レティチェフ", type:"birth" },

  // ―― 1777 ――
  { year:1777, date:"12月3日", cat:"要人", text:"生誕", person:"ジュリエット・レカミエ", nameAlt:"Juliette Récamier", country:"フランス", place:"リヨン", type:"birth" },
  { year:1777, date:"5月5日", cat:"舞台芸術", text:"生誕　劇作家", person:"アレクサンドル・アレクサンドロヴィチ・シャホフスコイ", nameAlt:"Александр Александрович Шаховской", country:"ロシア", place:"スモレンスク", type:"birth" },
  { year:1777, date:"6月27日", cat:"美術", text:"生誕　建築家", person:"フランソワ・ドゥブレ", nameAlt:"François Debret", country:"フランス", place:"パリ", type:"birth" },

  // ―― 1778 ――
  { year:1778, date:"12月6日", cat:"科学技術", text:"生誕　化学者", person:"ジョセフ・ルイ・ゲー＝リュサック", nameAlt: "Joseph Louis Gay-Lussac", country:"フランス", place:"サン＝レオナール＝ド＝ノブラ", type:"birth" },
  { year:1778, date:"12月17日", cat:"科学技術", text:"生誕　化学者", person:"ハンフリー・デイヴィー", nameAlt: "Humphry Davy", country:"イギリス", place:"ペンザンス", type:"birth" },

  // ―― 1780 ――
  { year:1780, date:"9月8日", cat:"科学技術", text:"生誕　軍事技術者、火薬の権威", person:"チャールズ＝ウィリアム・パスレー", nameAlt: "Charles William Pasley", country:"イギリス", place:"ダンフリーズシャー", type:"birth" },

  // ―― 1781 ――
  { year:1781, date:"3月18日", cat:"要人", text:"死去（痛風）（1727年生まれ）　政治家", person:"ジャック・テュルゴー", nameAlt: "Anne-Robert-Jacques Turgot, Baron de l'Aulne", country:"フランス", place:"パリ", type:"death" },

  // ―― 1782 ――
  { year:1782, date:"7月12日", cat:"思想", text:"生誕　東洋学者", person:"エティエンヌ・カトルメール", nameAlt: "Étienne Marc Quatremère", country:"フランス", place:"パリ", type:"birth" },
  { year:1782, date:"8月29日", cat:"社会", text:"ロイヤル・ジョージ（Royal George）号、スピットヘッドで沈没", person:null, nameAlt: null, country:"イギリス", place:"スピットヘッド", type:"death" },
  { year:1782, date:"12月14日", cat:"科学技術", text:"熱気球を2km飛ばせる", person: [ "ジョゼフ・ミシェル・モンゴルフィエ", "ジャック・エティエンヌ・モンゴルフィエ" ] , nameAlt: [ "Joseph Michel Montgolfier", "Jaques étienne Montgolfier" ] , country:"フランス", place:"", type:"event" },

  // ―― 1783 ――
  { year:1783, date:"", cat:"科学技術", text:"死去（1717年生まれ）", person:"ジャン・ル・ロン・ダランベール", nameAlt: "Jean Le Rond d'Alambert", country:"フランス", place:"パリ", type:"death" },
  { year:1783, date:null, cat:"科学技術", text:"ランプを発明", person:"アミ・アルガン", nameAlt: "Pierre Ami Argand", country:"スイス", place:"ジュネーヴ", type:"event" },

  // ―― 1784 ――
  { year:1784, date:"7月31日", cat:"科学技術", text:"死去（1713年生まれ）", person:"ドゥニ・ディドロ", nameAlt: "Denis Diderot", country:"フランス", place:"パリ", type:"death" },

  // ―― 1785 ――
  { year:1785, date:"11月28日", cat:"要人", text:"生誕　政治家", person:"ヴィクトル・ド・ブロイ公爵", nameAlt: "Achille Léonce Victor Charles de Broglie", country:"フランス", place:"パリ", type:"birth" }, 
  { year:1785, date:null, cat:"思想", text:"『アジア協会設立記念論集』（1792年まで）", person:"ウィリアム・ジョーンズ", nameAlt: "William Jones", country:"", place:null, type:"death" },

  // ―― 1786 ――
  { year:1786, date:"3月8日", cat:"思想", text:"死去（1718年生まれ）", person:"手島堵庵", nameAlt: "てじま とあん", country:"日本", place:null, type:"death" },
  { year:1786, date:"5月8日", cat:"科学技術", text:"生誕　発明家", person:"トーマス・ハンコック", nameAlt: "Thomas Hancock", country:"イギリス", place:"マールバラ", type:"birth" },

  //  ―― 1787 ――
  { year:1787, date:"10月4日", cat:"要人", text:"生誕　政治家・歴史家", person:"フランソワ＝ピエール＝ギヨーム・ギゾー", nameAlt: "François-Pierre-Guillaume Guizot", country:"フランス", place:"ニーム", type:"birth" },
  { year:1787, date:"11月18日", cat:"美術", text:"生誕", person:"ルイ・ジャック・マンデ・ダゲール", nameAlt: "Louis Jacques Mandé Daguerre", country:"フランス", place:"コルメイユ＝ザン＝パリジ", type:"birth" },

  // ―― 1790 ――
  { year:1790, date:"3月12日", cat:"科学技術", text:"生誕", person:"ジョン＝フレデリック・ダニエル", nameAlt: "John Frederic Daniell", country:"イギリス", place:"ロンドン", type:"birth" },

  // ―― 1791 ――
  { year:1791, date:"9月22日", cat:"科学技術", text:"生誕", person:"マイケル・ファラデー", nameAlt: "Michael Faraday", country:"イギリス", place:"サリー", type:"birth" },

  // ── 1794 ──
  { year:1794, date:"3月29日", cat:"科学技術", text:"死去（1743年生まれ）　数学者", person:"ニコラ・ド・コンドルセ", nameAlt: "Marie Jean Antoine Nicolas de Caritat, marquis de Condorcet", country:"フランス", place:"ブール＝ラ＝レーヌ", type:"death" },
  { year:1794, date:"4月27日", cat:"思想", text:"死去　言語学者", person:"ウィリアム・ジョーンズ", nameAlt: "William Jones", country:"インド", place:"コルカタ", type:"death" },
  { year:1794, date:"5月8日", cat:"科学技術", text:"死去（1743年生まれ）", person:"アントワーヌ＝ローラン・ド・ラヴォアジエ", nameAlt: "Antoine-Laurent de Lavoisier", country:"フランス", place:"パリ", type:"death" },
  { year:1794, date:"5月24日", cat:"思想", text:"生誕　神学者・哲学者・歴史家", person:"ウィリアム・ヒューウェル", nameAlt: "William Whewell", country:"イギリス", place:"ランカスター", type:"birth" },

  // ―― 1795 ――
  { year:1795, date:"12月4日", cat:"思想", text:"生誕　東洋学者", person:"ジョゼフ・レイノー", nameAlt: "Joseph Toussaint Reinaud", country:"フランス", place:"ランベスク", type:"birth" }, 

  // ―― 1796 ――
  { year:1796, date:"7月6日", cat:"思想", text:"生誕　哲学者", person:"テオドール・ジュフロワ", nameAlt: "Théodore Simon Jouffroy", country:"フランス", place:"レ・ポンテ", type:"birth" },
  { year:1796, date:"8月4日", cat:"思想", text:"生誕　哲学者", person:"ピエール＝シモン・バランシュ", nameAlt: "Pierre-Simon Ballanche", country:"フランス", place:"リヨン", type:"birth" },

  // ── 1799 ──
  { year:1799, date:null, cat:"科学技術", text:"王立研究所、設立", person:null, nameALt: "The Royal Institution of Great Britain", country:"イギリス", place:"ロンドン", type:"event" },
  { year:1779, date:"", cat:"科学技術", text:"生誕", person:"イェンス・ヤコブ・ベルセリウス", nameAlt: "Jöns Jakob Berzelius", country:"スウェーデン", place:"リンシェーピング", type:"birth" },
  { year:1799, date:"8月2日", cat:"科学技術", text:"死去（1745年生まれ）", person:"ジャック・エティエンヌ・モンゴルフィエ", nameAlt: "Jaques étienne Montgolfier", country:"フランス", place:"セリエール", type:"death" },
  { year:1799, date:"10月18日", cat:"科学技術", text:"生誕　化学者", person:"クリスチャン・シェーンバイン", nameAlt: "Christian Schönbein", country:"ドイツ", place:"メッツィンゲン", type:"birth" }, 
  { year:1799, date:"12月6日", cat:"科学技術", text:"死去（1728年生まれ）　化学者", person:"ジョゼフ・ブラック", nameAlt: "Joseph Black", country:"イギリス", place:"スコットランド", type:"death" },

  // ―― 1800 ――
  { year:1800, date:null, cat:"科学技術", text:"ヴォルタ電池が発明される", person:"アレッサンドロ・ヴォルタ", nameAlt: "Alessandro Volta", country:"イタリア", place:null, type:"event" },
  { year:1800, date:"2月11日", cat:"科学技術", text:"生誕", person:"ウィリアム・ヘンリー・フォックス・タルボット", nameAlt: "William Henry Fox Talbot", country:"イギリス", place:"ドーセット", type:"birth" },

  // ―― 1803 ――
  { year:1803, date:"2月17日", cat:"思想", text:"生誕", person:"エドガー・キネ", nameAlt: "Edgar Quinet", country:"フランス", place:"ブールカン＝ブレス", type:"birth" },
  { year:1803, date:"10月", cat:"科学技術", text:"死去（1750年生まれ）　技師", person:"アミ・アルガン", nameAlt: "Pierre Ami Argand", country:"スイス", place:"ジュネーヴ", type:"death" },

  // ―― 1804 ――
  { year:1804, date:"9月16日", cat:"科学技術", text:"自ら水素気球で7000m超へ", person:"ジョセフ・ルイ・ゲー＝リュサック", nameAlt: "Joseph Louis Gay-Lussac", country:"フランス", place:"パリ", type:"event" },
  { year:1804, date:"", cat:"思想", text:"死去（1733年生まれ）", person:"ジョゼフ・プリーストリー", nameAlt: "Joseph Pristley", country:"アメリカ", place:"ペンシルバニア", type:"death" },

  // ―― 1806 ――
  { year:1806, date:"8月22日", cat:"思想", text:"死去（1760年生まれ）　蘭学者", person:"志筑忠雄", nameAlt: "しづき ただお", country:"日本", place:"長崎", type:"death" },
  { year:1806, date:null, cat:"思想", text:"『アラブ名文集』", person:"シルヴェストル・ド・サシ", nameAlt: ["Chrestomathie arabe", "Antoine-Isaac Silvestre de Sacy"], country:"フランス", place:null, type:"event" },

 // ―― 1808 ――
 { year:1808, date:null, cat:"思想", text:"『インド人の言語と英知について』", person:"フリードリヒ・シュレーゲル", nameAlt: "Karl Wilhelm Friedrich von Schlegel", country:"ドイツ", place:null, type:"event" },

  // ―― 1810 ――
  { year:1810, date:"6月26日", cat:"科学技術", text:"死去（1740年生まれ）", person:"ジョゼフ・ミシェル・モンゴルフィエ", nameAlt: "Joseph Michel Montgolfier", country:"フランス", place:"バラリュック＝レ＝バン", type:"death" },

  // ── 1811 ──
  { year:1811, date:"3月30日", cat:"科学技術", text:"生誕", person:"ロベルト・ヴィルヘルム・ブンゼン", nameAlt: "Robert Wilhelm Bunsen", country:"ドイツ", place:"ゲッティンゲン", type:"birth" },

  // ―― 1812 ――
  { year:1812, date:"10月12日", cat:"科学技術", text:"生誕　化学者", person:"アスカニオ・ソブレロ", nameAlt: "Ascanio Sobrero", country:"イタリア", place:"ピエモンテ", type:"birth" }, 

  // ── 1813 ──
  { year:1813, date:"4月23日", cat:"", text:"生誕　歴史家", person:"フレデリック・オザナム", nameAlt: "Frédéric Ozanam", country:"イタリア", place:"ミラノ", type:"birth" },
  { year:1813, date:null, cat:"科学技術", text:"王立研究所（The Royal Institution of Great Britain）教授に", person:"マイケル・ファラデー", nameAlt: "Michael Faraday", country:"イギリス", place:"ロンドン", type:"event" }, 

  // ―― 1815 ――
  { year:1815, date:null, cat:"科学技術", text:"鉱山業者たち、ハンフリー・デイヴィーに安全灯の考案を依頼", person:"ハンフリー・デイヴィー", nameAlt: "Humphry Davy", country:"イギリス", place:null, type:"event" },

  // ――1814 ――
  { year:1814, date:"4月5日", cat:"科学技術", text:"生誕", person:"フランソワ＝エマニュエル・ヴェルガン", nameAlt: "François-Emmanuel Verguin", country:"フランス", place:"リヨン", type:"birth" },

  // ―― 1817 ――
  { year:1817, date:"6月30日", cat:"科学技術", text:"生誕　植物学者　", person:"ジョセフ・ダルトン・フッカー", nameAlt: "Joseph Dalton Hooker", country:"イギリス", place:"ヘイルスワース", type:"birth" },

  // ―― 1820 ――
  { year:1820, date:null, cat:"科学技術", text:"ゴムの加工法、開発", person:"トーマス・ハンコック", nameAlt: "Thomas Hancock", country:"イギリス", place:"ロンドン", type:"event" },

  // ―― 1821 ――
  { year:1821, date:"3月31日", cat:"思想", text:"死去（1748年生まれ）", person:"山片蟠桃", nameAlt: "やまがた ばんとう", country:"日本", place:null, type:"death" },

  // ―― 1822 ――
  { year:1822, date:null, cat:"思想", text:"アジア協会初代会長に", person:"シルヴェストル・ド・サシ", nameAlt: "Antoine-Isaac Silvestre de Sacy", country:"フランス", place:null, type:"event" },

  // ―― 1823 ――
  { year:1823, date:null, cat:"科学技術", text:"塩素の液化に成功", person:"マイケル・ファラデー", nameAlt: "Michael Faraday", country:"イギリス", place:"ロンドン", type:"event" },

  // ── 1824 ──
  { year:1824, date:"3月12日", cat:"科学技術", text:"生誕", person:"グスタフ・ロベルト・キルヒホッフ", nameAlt: "Gustav Robert Kirchhoff", country:"ドイツ", place:"ケーニヒスベルク. プロイセン", type:"birth" },
  { year:1824, date:"8月8日", cat:"思想", text:"死去（1759年生まれ）　古典学者", person:"フリードリヒ・アウグスト・ヴォルフ", nameAlt: "Friedrich August Wolf", country:"フランス", place:"マルセイユ", type:"death" },
  { year:1824, date:null, cat:"科学技術", text:"王立研究所所長になる", person:"マイケル・ファラデー", nameAlt: "Michael Faraday", country:"イギリス", place:"ロンドン", type:"event" },
  { year:1824, date:null, cat:"思想", text:"現代東洋学校の校長になる", person:"シルヴェストル・ド・サシ", nameAlt: "Antoine-Isaac Silvestre de Sacy", country:"フランス", place:"パリ", type:"event" },
  { year:1824, date:null, cat:"思想", text:"『一般文法の原理』", person:"シルヴェストル・ド・サシ", nameAlt: "Antoine-Isaac Silvestre de Sacy", country:"フランス", place:"パリ", type:"event" },

  // ―― 1825 ――
  { year:1825, date:"4月11日", cat:"思想", text:"生誕", person:"フェルディナント・ラッサール", nameAlt: "Ferdinand Johann Gottlieb Lassalle", country:"ポーランド", place:"ヴロツワフ", type:"birth" },
  { year:1825, date:null, cat:"思想", text:"『アラビア語の文法的判例集』", person:"シルヴェストル・ド・サシ", nameAlt: "Antoine-Isaac Silvestre de Sacy", country:"フランス", place:null, type:"event" },

  // ―― 1826 ――
  { year:1826, date:null, cat:"科学技術", text:"王立研究所の職員に（1832年辞任）", person:"トーマス＝ジョン・ピアソール", nameAlt: "Thomas John Pearsall", country:"イギリス", place:"ロンドン", type:"event" },

  // ―― 1827 ――
  { year:1827, date:"3月5日", cat:"科学技術", text:"死去（1745年生まれ）", person:"アレッサンドロ・ヴォルタ", nameAlt: "Alessandro Volta", country:"イタリア", place:"コモ", type:"death" },
  { year:1827, date:null, cat:"科学技術", text:"ガラスに関するプロジェクトのため王立研究所に雇われる", person:"チャールズ・アンダーソン", nameAlt: "Charles Anderson", country:"イギリス", place:"ロンドン", type:"event" },

  // ―― 1828 ――
  { year:1828, date:"10月31日", cat:"科学技術", text:"生誕　発明家", person:"ジョゼフ・ウィルソン・スワン", nameAlt: "Joseph Wilson Swan", country:"イギリス", place:"サンダーランド", type:"birth" },

  // ―― 1829 ――
  { year:1829, date:"1月12日", cat:"思想", text:"死去（1772年生まれ）", person:"フリードリヒ・シュレーゲル", nameAlt: "Karl Wilhelm Friedrich von Schlegel", country:"ドイツ", place:"ドレスデン", type:"death" },
  { year:1829, date:"5月29日", cat:"科学技術", text:"死去（心臓病）　化学者", person:"ハンフリー・デイヴィー", nameAlt: "Humphry Davy", country:"スイス", place:"ジュネーヴ", type:"death" },

  // ―― 1830 ――
  { year:1830, date:"9月15日", cat:"社会", text:"リバプール・マンチェスター鉄道、開業", person:null, nameAlt: "Liverpool and Manchester Railway", country:"イギリス", place:"リバプール～マンチェスター", type:"event" },

  // ── 1832 ──
  { year:1832, date:"6月17日", cat:"科学技術", text:"生誕", person:"ウィリアム・クルックス", nameAlt: "William Crookes", country:"イギリス", place:"ロンドン", type:"birth" },
  { year:1832, date:"10月2日", cat:"思想", text:"生誕　人類学者", person:"エドワード・バーネット・タイラー", nameAlt: "Edward Burnett Tylor", country:"イギリス", place:"ロンドン", type:"birth" },
  { year:1832, date:null, cat:"思想", text:"『諸宗教の精髄』", person:"エドガー・キネ", nameAlt: "Edgar Quinet", country:"フランス", place:null, type:"event" },
  { year:1832, date:"", cat:"科学技術", text:"王立研究所正規職員に（ファラデーの弟子）", person:"チャールズ・アンダーソン", nameAlt: "Charles Anderson", country:"イギリス", place:"ロンドン", type:"event" },
  
  // ―― 1833 ――
  { year:1833, date:"2月4日", cat:"思想", text:"死去（1742年生まれ）　歴史家", person:"ボン＝ジョゼフ・ダシエ", nameAlt: "Bon-Joseph Dacier", country:"フランス", place:"パリ", type:"birth" },
  { year:1833, date:"10月21日", cat:"科学技術", text:"生誕", person:"アルフレッド・ノーベル", nameAlt: "Alfred Bernhard Nobel", country:"スウェーデン", place:"ストックホルム", type:"birth" },
  { year:1833, date:null, cat:"科学技術", text:"「科学者（scientist）」という語を提案", person:"ウィリアム・ヒューウェル", nameAlt: "William Whewell", country:"イギリス", place:null, type:"event" },

  // ―― 1834 ――
  { year:1834, date:"2月19日", cat:"美術", text:"生誕", person:"ウィリアム・モリス", nameAlt: "William Morris", country:"イギリス", place:"ロンドン", type:"birth" },

  // ―― 1836 ――
  { year:1836, date:null, cat:"科学技術", text:"ダニエル電池、発明される", person:"ジョン＝フレデリック・ダニエル", nameAlt: "John Frederic Daniell", country:"イギリス", place:null, type:"event" },

  // ―― 1838 ――
  { year:1838, date:"2月21日", cat:"思想", text:"死去（1758年生まれ）", person:"シルヴェストル・ド・サシ", nameAlt: "Antoine-Isaac Silvestre de Sacy", country:"フランス", place:"パリ", type:"death" },
  { year:1838, date:"3月12日", cat:"科学技術", text:"生誕", person:"ウィリアム＝ヘンリー・パーキン", nameAlt: "William Henry Perkin", country:"イギリス", place:"ロンドン", type:"birth" },

  // ―― 1839 ――
  { year:1839, date:"8月", cat:"科学技術", text:"難破船を火薬の爆発によって取り除く作業を開始", person:"チャールズ＝ウィリアム・パスレー", nameAlt: "Charles William Pasley", country:"イギリス", place:"スピットヘッド", type:"event" },
  { year:1839, date:"11月15日", cat:"科学技術", text:"死去（1754年生まれ）　ボールトン・ワット商会の技師", person:"ウィリアム・マードック", nameAlt: "William Murdock", country:"イギリス", place:"バーミンガム", type:"death" },

  // ―― 1840 ――
  { year:1840, date:"12月", cat:"科学技術", text:"クリスマス講演", person:"ジョン＝フレデリック・ダニエル", nameAlt: "John Frederic Daniell", country:"イギリス", place:"ロンドン", type:"event" },

  // ―― 1842 ――
  { year:1842, date:"1月15日", cat:"思想", text:"生誕", person:"ポール・ラファルグ", nameAlt: "Paul Lafargue", country:"キューバ", place:"サンティアゴ・デ・キューバ", type:"birth" },
  { year:1842, date:"2月4日", cat:"思想", text:"死去　哲学者", person:"テオドール・ジュフロワ", nameAlt: "Théodore Simon Jouffroy", country:"フランス", place:"パリ", type:"death" },

  // ── 1843 ──
  { year:1843, date:null, cat:"政治（国際）", text:"清、イギリスに香港を割譲", person:null, country:"清/イギリス", type:"event" },
  { year:1843, date:"2月12日", cat:"宗教", text:"新島襄　生誕　キリスト教系教育者", country:"日本", place:"東京", type:"birth" },
  { year:1843, date:"3月27日", cat:"社会", text:"マルタン=ギヨーム・ビエンネ　死去　金細工職人", country:"フランス", place:"パリ", type:"death" },
  { year:1843, date:"3月30日", cat:"文学", text:"コンスタンティン・ミハイロヴィチ・スタニュコーヴィチ　生誕", country:"ロシア", place:"セヴァストーポリ", type:"birth" },
  { year:1843, date:"4月15日", cat:"文学", text:"ヘンリー・ジェイムズ　生誕", country:"アメリカ", place:"ニューヨーク", type:"birth" },
  { year:1843, date:"5月2日", cat:"舞台芸術", text:"ニコライ・フョードロヴィチ・サゾノフ　生誕　俳優", person:null, country:"ロシア", place:"ペテルブルク", type:"birth" },
  { year:1843, date:"6月3日", cat:"要人", text:"生誕", person:"フレゼリク8世", country:"デンマーク", place:"コペンハーゲン", type:"birth" },
  { year:1843, date:"6月3日", cat:"科学技術", text:"クリメント・アルカージエヴィチ・ティミリャーゼフ　生誕　植物学者", country:"ロシア", place:"ペテルブルク", type:"birth" },
  { year:1843, date:"7月8日", cat:"宗教", text:"マークウィス・ラフェイエット・ゴードン　生誕　宣教師", person:null, country:"アメリカ", place:"ペンシルバニア", type:"birth" },
  { year:1843, date:"8月20日", cat:"音楽", text:"生誕　歌手", person:"クリスティーナ・ニルソン", country:"スウェーデン",type:"birth" },
  { year:1843, date:"9月20日", cat:"要人", text:"生誕", person:"ニコライ・アレクサンドロヴィチ", country:"ロシア", place: "ペテルブルク", type:"birth" },
  { year:1843, date:"11月7日", cat:"科学技術", text:"ハインリヒ・フリードリヒ・ヴェーバー　生誕　物理学者", country:"ドイツ", place:"マグダラ（ザクセン＝ヴァイマル＝アイゼナハ）", type:"birth" },
  { year:1843, date:"11月29日", cat:"社会", text:"ガートルード・ジーキル　生誕　園芸家", country:"イギリス", place:"メイフェア", type:"birth" },
  { year:1843, date:"10月24日", cat:"美術", text:"ヘンリク・シェミラツキ　生誕",country:"ロシア", place:"ノヴォ・ベルゴロド（ウクライナ）", type:"birth" },
  { year:1843, date:"10月25日", cat:"文学", text:"グレープ・イヴァーノヴィチ・ウスペンスキー　生誕", country:"ロシア", place:"トゥーラ", type:"birth" },
  { year:1843, date:"12月4日", cat:"音楽", text:"オラトリオ『楽園とペリ』", person:"ロベルト・シューマン", country:"ドイツ", place:"ライプツィヒ（ザクセン）", type:"event" },
  { year:1843, date:"12月11日", cat:"科学技術", text:"ロベルト・コッホ　生誕", country:"ドイツ", place:"クラウスタール（ハノーファー）", type:"birth" },
  { year:1843, date:"12月11日", cat:"文学", text:"カジミール・ドラヴィーニュ　死去", country:"フランス", place:"リヨン", type:"death" },
  { year:1843, date:"12月20日", cat:"社会", text:"ナポリ-カンチェロ-カゼルタ間の鉄道、開通", person:null, country:"イタリア", type:"event" },
  { year:1843, date:null, cat:"社会", text:"チボリ公園、開園", person:null, country:"デンマーク", place:"コペンハーゲン", type:"event" },
  { year:1843, date:null, cat:"宗教", text:"スコットランド自由教会、創設", country:"イギリス", place:"スコットランド", type:"event" },
  { year:1843, date:null, cat:"文学", text:"『パリの秘密』", person:"ウジェーヌ・スー", country:"フランス", type:"event" },
  { year:1843, date:null, cat:"思想", text:"『あれか、これか』", person:"セーレン・キルケゴール", country:"デンマーク", type:"event" },
  { year:1843, date:null, cat:"思想", text:"『ユダヤ人問題によせて』", person:"カール・マルクス", country:"ドイツ", type:"event" },
  { year:1843, date:null, cat:"音楽", text:"オペラ『十字軍のロンバルディア人』初演", person:"ジュゼッペ・ヴェルディ", country:"イタリア", type:"event" },
  { year:1843, date:null, cat:"舞台芸術", text:"アントニオ・ガルシア=グティエレス　戯曲『シモン・ボカネグラ』", country:"スペイン", type:"event" },
  { year:1843, date:null, cat:"美術", text:"『花と少女』", person:"カミーユ・ロクプラン", country:"フランス", type:"event" },
  { year:1843, date:null, cat:"美術", text:"アルフレッド・エドワード・シャロン　『ジゼルを演じるカルロッタ・グリジ』", country:"スイス", type:"event" },
  { year:1843, date:null, cat:"美術", text:"フランシス・グラント　『ヴィクトリア女王の肖像』", country:"イギリス", type:"event" },
  { year:1843, date:null, cat:"思想", text:"ヴィンチェンツォ・ジョベルディ　『イタリア人の道徳的・文明的優位』出版", country:"ベルギー", place:"ブリュッセル", type:"event" },
  { year:1843, date:null, cat:"法", text:"劇場法の制定　ライセンスのある劇の上演独演を廃す代わり、観客席に於ける酒類の販売を禁じる", person:null, country:"イギリス", type:"event" },
  { year:1843, date:null, cat:"メディア", text:"『タン』紙、廃刊", country:"フランス", type:"death" },
  { year:1843, date:null, cat:"メディア", text:"『レフォルム』紙、創刊　ルイ・ブラン、ルドリュ・ロラン監修　共和左派の日刊紙", country:"フランス", type:"birth" },
  { year:1843, date:null, cat:"音楽", text:"楽譜集『ドイツ家庭の音楽の宝』出版", person:null, country:"ドイツ", type:"event" },
  { year:1843, date:null, cat:"科学技術", text:"ジャン=アントワーヌ・アルノー　レストランがメニューを日々変えられるような装置を作り、特許を取る。流行せず", country:"フランス", type:"event" },

  // ── 1844 ──
  { year:1844, date:null, cat:"政治（国際）", text:"ロシアのアルメニア人居留地がティフリス（トビリシ）に編入",person:null, country:"ロシア", type:"event" },
  { year:1844, date:"1月13日", cat:"要人", text:"アンリ・ガティアン・ベルトラン　死去　将軍", person:null, country:"フランス", place:"シャトールー", type:"death" },
  { year:1844, date:"1月16日", cat:"思想", text:"ハインリヒ・デニフレ　生誕　歴史家", person:null, country:"オーストリア", place:"チロル", type:"birth" },
  { year:1844, date:"1月27日", cat:"文学", text:"シャルル・ノディエ　死去", person:null, country:"フランス", place:"パリ", type:"death" },
  { year:1844, date:"3月8日", cat:"政治（国内）", text:"カール14世ヨハン　死去", person:null, country:"スウェーデン", place:"ストックホルム", type:"death" },
  { year:1844, date:"3月10日", cat:"音楽", text:"生誕", person:"パブロ・デ・サラサーテ", country:"スペイン", place:"パンプローナ", type:"birth" },
  { year:1844, date:"3月14日", cat:"要人", text:"生誕", person:"ウンベルト1世", country:"イタリア", place:"トリノ", type:"birth" },
  { year:1844, date:"3月18日", cat:"音楽", text:"生誕", person:"ニコライ・アンドレーヴィチ・リムスキー＝コルサコフ", country:"ロシア", place:"チフヴィン", type:"birth" },
  { year:1844, date:"3月30日", cat:"文学", text:"生誕", person:"ポール・ヴェルレーヌ", country:"フランス", place:"メッス", type:"birth" },
  { year:1844, date:"3月30日", cat:"舞台芸術", text:"バレエ『エスメラルダ』ロンドン王立劇場初演", person:"チェーザレ・プーニ", country:"イギリス", place:"ロンドン", type:"event" },
  { year:1844, date:"3月24日", cat:"美術", text:"ベルテル・トーヴァルセン　死去", person:null, country:"デンマーク", place:"コペンハーゲン", type:"death" },
  { year:1844, date:"5月2日", cat:"文学", text:"ウィリアム・トマス・ベックフォード　死去", person:null, country:"イギリス", place:"バース", type:"death" },
  { year:1844, date:"5月23日", cat:"舞台芸術", text:"バレエ『ラ・ヴィヴァンディエール（酒保の娘）』", person:"チェーザレ・プーニ", country:"イギリス", place:"ロンドン、ハー・マジェスティーズ劇場", type:"event" },
  { year:1844, date:"5月26日", cat:"社会", text:"カゼルタ-カプア間鉄道、開通",person:null, country:"イタリア", type:"event" },
  { year:1844, date:"6月1日", cat:"美術", text:"ヴァシリー・ディミトリエヴィチ・ポレーノフ　生誕", person:null, country:"ロシア", place:"ペテルブルク", type:"birth" },
  { year:1844, date:"6月17日", cat:"科学技術", text:"野口源之助　生誕　写真技師", person:null, country:"日本", place:"長崎", type:"birth" },
  { year:1844, date:"6月19日", cat:"科学技術", text:"エティエンヌ・ジョフロワ・サン=ティレール　死去　博物学者", person:null, country:"フランス", place:"パリ", type:"death" },
  { year:1844, date:"6月27日", cat:"宗教", text:"ジョセフ・スミス・ジュニア　死去 宗教指導者", person:null, country:"アメリカ", place:"イリノイ", type:"death" },
  { year:1844, date:"7月11日", cat:"文学", text:"エヴゲーニー・アブラモヴィチ・バラトゥインスキー　死去", person:null, country:"イタリア", place:"ナポリ", type:"death" },
  { year:1844, date:"7月27日", cat:"科学技術", text:"ジョン・ドルトン　死去（脳梗塞）", person:null, country:"イギリス", place:"マンチェスター", type:"death" },
  { year:1844, date:"7月31日", cat:"美術", text:"レオン・オーギュスタン・ルミレット　生誕", person:null, country:"フランス", place:"モン＝サン＝ペール", type:"birth" },
  { year:1844, date:"8月5日", cat:"美術", text:"生誕", person:"イリヤ・エフィーモヴィチ・レーピン", country:"ロシア", place:"ハリコフ（ウクライナ）", type:"birth" },
  { year:1844, date:"10月15日", cat:"思想", text:"生誕", person:"フリードリヒ・ニーチェ",  nameAlt: "Friedrich Wilhelm Nietzsche", country:"ドイツ", place:"プロイセン", type:"birth" },
  { year:1844, date:"10月21日", cat:"要人", text:"ミハイル・レオンティエヴィチ・マグニツキー　死去　政治家", country:"ロシア", place:"オデッサ（ウクライナ）", type:"death" },
  { year:1844, date:"10月22日", cat:"舞台芸術", text:"サラ・ベルナール　生誕", person:null, country:"フランス", place:"パリ", type:"birth" },
  { year:1844, date:"11月21日", cat:"文学", text:"死去（肺炎）", person:"イヴァン・アンドレーヴィチ・クルィローフ", country:"ロシア", place:"ペテルブルク", type:"death" },
  { year:1844, date:"12月1日", cat:"要人", text:"アレクサンドラ・オブ・デンマーク　生誕", country:"デンマーク", place:"コペンハーゲン", type:"birth" },
  { year:1844, date:null, cat:"政治（国内）", text:"アレクサンドロス・マヴロコルダートス、初代首相に", country:"ギリシャ", type:"event" },
  { year:1844, date:null, cat:"文学", text:"『冬物語』", person:"ハインリヒ・ハイネ", country:"ドイツ", type:"event" },
  { year:1844, date:null, cat:"文学", text:"『三銃士』　『モンテ・クリスト伯』連載開始", person:"アレクサンドル・デュマ", country:"フランス", type:"event" },
  { year:1844, date:null, cat:"文学", text:"詩『ドリームランド』", person:"エドガー・アラン・ポー", country:"イギリス", type:"event" },
  { year:1844, date:null, cat:"文学", text:"現代語ドイツ語訳『トリスタンとイゾルデ』（原作はゴットフリート・フォン・シュトラースブルク）", person:null, country:"ドイツ", type:"event" },
  { year:1844, date:null, cat:"社会", text:"キール-アルトナ間で初の鉄道が開通", person:null, country:"デンマーク", type:"event" },
  { year:1844, date:null, cat:"思想", text:"『経済学・哲学草稿』", person:"カール・マルクス", country:"ドイツ", type:"event" },
  { year:1844, date:null, cat:"思想", text:"『哲学的断片』", person:"セーレン・キルケゴール", country:"デンマーク", type:"event" },
  { year:1844, date:null, cat:"思想", text:"エドガー・キネ　『教皇至上主義（ウルトラモンタニスム）』", person:null, country:"フランス", type:"event" },
  { year:1844, date:null, cat:"思想", text:"チェーザレ・バルボ　『イタリアの希望』出版", person:null, country:"フランス", place:"パリ", type:"event" },
  { year:1844, date:null, cat:"宗教", text:"「キリスト教青年会（YMCA）」、創設", person:null, country:"イギリス", place:"ロンドン", type:"event" },
  { year:1844, date:null, cat:"社会", text:"国内初の国民高等学校、開校", person:null, country:"デンマーク", type:"event" },
  { year:1844, date:null, cat:"美術", text:"フォックス・タルボット『自然の鉛筆』（最古の写真集）", person:null, country:"イギリス", type:"event" },
  { year:1844, date:null, cat:"社会", text:"丸十大屋、紅花商として開業", person:null, country:"日本", place:"山形", type:"event" },
  { year:1844, date:null, cat:"メディア", text:"メフメット・キャーミル『コックの避難所』（オスマン朝初の料理本）", person:null, country:"オスマン", type:"event" },
  { year:1844, date:null, cat:"メディア", text:"ジョン・ダービン旅行記『ヨーロッパ、特にフランスと大英帝国の見聞』", person:null, country:"アメリカ", type:"event" },

  // ── 1845 ──
  { year:1845, date:null, cat:"政治（国内）", text:"カメハメハ3世、ホノルルを首都に", person:null, country:"アメリカ", place:"ハワイ王国", type:"event" },
  { year:1845, date:null, cat:"法", text:"刑事罰・強制罰法典　ロシア最初の刑法典", person:null, country:"ロシア", type:"event" },
  { year:1845, date:null, cat:"社会", text:"ジャガイモ飢饉　以後数年にわたり", person:null, country:"イギリス", place:"アイルランド", type:"event" },
  { year:1845, date:null, cat:"社会", text:"ネバド・デル・ルイス山濁流", person:null, country:"コロンビア", place:"アンデス山脈", type:"event" },
  { year:1845, date:"2月12日", cat:"宗教", text:"ジュリアス・ソーパー　生誕　宣教師", person:null, country:"アメリカ", place:"メリーランド", type:"birth" },
  { year:1845, date:"2月22日", cat:"宗教", text:"シドニー・スミス　死去 英国国教会聖職者", person:null, country:"イギリス", place:"ロンドン", type:"death" },
  { year:1845, date:"3月9日", cat:"科学技術", text:"ヴィルヘルム・ペッファー　生誕　植物学者", person:null, country:"ドイツ", place:"グレーベンシュタイン（ヘッセン＝カッセル）", type:"birth" },
  { year:1845, date:"3月10日", cat:"要人", text:"生誕", person:"アレクサンドル3世", country:"ロシア", place:"ペテルブルク",type:"birth" },
  { year:1845, date:"3月13日", cat:"科学技術", text:"死去（肺出血）", person:"ジョン＝フレデリック・ダニエル", nameAlt: "John Frederic Daniell", country:"イギリス", place:"ロンドン", type:"death" },
  { year:1845, date:"3月27日", cat:"科学技術", text:"ヴィルヘルム・レントゲン 生誕", person:null, country:"ドイツ", place:"レンネップ（プロイセン）", type:"birth" },
  { year:1845, date:"3月30日", cat:"文学", text:"アレクサンドル・スーメ 死去", person:null, country:"フランス", place:"パリ", type:"death" },
  { year:1845, date:"4月19日", cat:"要人", text:"ミハイル・ニコラエヴィチ・ムラヴィヨフ　生誕　政治家", person:null, country:"ロシア", place:"ペテルブルク", type:"birth" },
  { year:1845, date:"5月19日", cat:"美術", text:"ウィリアム・ジョン・ハギンズ　死去", person:null, country:"イギリス", place:"ロンドン", type:"death" },
  { year:1845, date:"5月25日", cat:"音楽", text:"ゲルマン・アヴグストヴィチ・ラローシ　生誕　批評家", person:null, country:"音楽", place:"ペテルブルク", type:"birth" },
  { year:1845, date:"6月7日", cat:"音楽", text:"レオポルト・アウアー　生誕　ヴァイオリニスト", person:null, country:"ハンガリー", place:"ベスブレーム", type:"birth" },
  { year:1845, date:"6月8日", cat:"要人", text:"アンドリュー・ジャクソン　死去　大統領", person:null, country:"アメリカ", place:"テネシー州ナッシュビル", type:"birth" },
  { year:1845, date:"7月9日", cat:"科学技術", text:"ジョージ・ハワード・ダーウィン　生誕　天文学者", person:null, country:"イギリス", place:"ケンブリッジ", type:"birth" },
  { year:1845, date:"8月15日", cat:"美術", text:"ウォルター・クレイン　生誕", person:null, country:"イギリス", place:"リバプール", type:"birth" },
  { year:1845, date:"8月25日", cat:"要人", text:"生誕", person:"ルートヴィヒ2世", country:"ドイツ", place:"ミュンヘン（バイエルン）", type:"birth" },
  { year:1845, date:"9月21日", cat:"要人", text:"エゴール・フランツェヴィチ・カンクリン　死去　大臣", person:null, country:"ロシア", place:"パヴロフスク", type:"birth" },
  { year:1845, date:"9月22日", cat:"宗教", text:"ハルトマン・グリザール　生誕　イエズス会司祭", person:null, country:"ドイツ", place:"コブレンツ（プロイセン）", type:"birth" },
  { year:1845, date:"9月23日", cat:"政治（国内）", text:"リミニにて民衆反乱", person:null, country:"イタリア", place:"教会国家", type:"event" },
  { year:1845, date:"9月28日", cat:"要人", text:"ディミトリー・パーヴロヴィチ・タチーシチェフ　死去　政治家（ロシア）", person:null, country:"オーストリア", place:"ウィーン", type:"event" },
  { year:1845, date:"11月16日", cat:"美術", text:"ニコライ・リヴォーヴィチ・スカドフスキー　生誕", person:null, country:"ロシア", place:"ヘルソン", type:"birth" },
  { year:1845, date:"12月15日", cat:"要人", text:"アレクサンドル・イヴァーノヴィチ・トゥルゲーネフ　死去　政治家", person:null, country:"ロシア", place:"モスクワ", type:"death" },
  { year:1845, date:"12月24日", cat:"要人", text:"生誕", person:"ゲオルギウス1世", country:"デンマーク", place:"コペンハーゲン", type:"birth" },
  { year:1845, date:null, cat:"思想", text:"「金曜会」、開始　-49年まで", person:"ミハイル・ヴァシリエヴィチ・ペトラシェフスキー", country:"ロシア", place:"ペテルブルク", type:"event" },
  { year:1845, date:null, cat:"社会", text:"モスクワ・アジア貿易商会、創立　ロシア-ペルシア間の貿易が活性化", person:null, country:"ロシア、ペルシャ", type:"event" },
  { year:1845, date:null, cat:"文学", text:"『カルメン』", person:"プロスペル・メリメ", country:"フランス", type:"event" },
  { year:1845, date:null, cat:"文学", text:"『貧しき人々』", person:"フョードル・ミハイロヴィチ・ドストエフスキー", country:"ロシア", type:"event" },
  { year:1845, date:null, cat:"文学", text:"『王妃マルゴ』", person:"アレクサンドル・デュマ", country:"フランス", type:"event" },
  { year:1845, date:null, cat:"思想", text:"エドガー・キネ『キリスト教とフランス革命』", person:null, country:"フランス", type:"event" },
  { year:1845, date:null, cat:"美術", text:"アルフレッド・エドワード・シャロン『シルフィードを演じるマリー・タリオーニ』", person:null, country:"スイス", type:"event" },
  { year:1845, date:null, cat:"法", text:"ガラス税の廃止", person:null, country:"イギリス", type:"event" },
  { year:1845, date:null, cat:"メディア", text:"『チェンバーズ・ジャーナル（Chamber’s Journal）』、創刊", person:null, country:"イギリス", type:"birth" },
  { year:1845, date:null, cat:"社会", text:"カシノ・ホール、開場", person:null, country:"ブラジル", place:"リオ・デ・ジャネイロ", type:"event" },
  { year:1845, date:null, cat:"舞台芸術", text:"バレエ『四人の悪魔』オペラ座初演", person:"アドルフ・アダン", country:"フランス", place:"パリ、オペラ座", type:"event" },
  { year:1845, date:null, cat:"宗教", text:"グランヴィル文学・神学校、グランヴィル大学に改名", person:null, country:"アメリカ", place:"オハイオ", type:"event" },

  // ── 1846 ──
  { year:1846, date:null, cat:"政治（国内）", text:"ポーランド民族主義者蜂起", person:null, country:"ロシア", type:"event" },
  { year:1846, date:"6月1日", cat:"政治（国際）",  text:"グレゴリオス16世　死去 / ピウス9世　教皇就任（6月16日）", person:null, country:"教皇庁", type:"event" },
  { year:1846, date:"5月30日", cat:"美術", text:"生誕　ペテルブルク", person:"ピーター・カール・ファベルジェ",  country:"ロシア", type:"birth" },
  { year:1850, date:null, cat:"科学技術", text:"電気電信会社、創立　世界初の公開電信会社", person:null, nameAlt: "Electric Telegraph Company", country:"イギリス", place:null, type:"event" },
  { year:1846, date:"", cat:"科学技術", text:"ニトログリセリン発見", person:"アスカニオ・ソブレロ", nameAlt: "Ascanio Sobrero", country:"イタリア", place:null, type:"event" },

  // ── 1847 ──
  { year:1847, date:"6月12日", cat:"思想", text:"生誕　哲学者", person:"ピエール＝シモン・バランシュ", nameAlt: "Pierre-Simon Ballanche", country:"フランス", place:"パリ", type:"death" },
  { year:1847, date:"9月8日", cat:"", text:"死去（結核）　歴史家", person:"フレデリック・オザナム", nameAlt: "Frédéric Ozanam", country:"フランス", place:"マルセイユ", type:"death" },
  { year:1847, date:"11月4日", cat:"音楽", text:"死去　ライプツィヒ（過労）",  person:"フェリックス・メンデルスゾーン", country:"ドイツ",  type:"death" },
  { year:1847, date:null,    cat:"文学", text:"シャーロット・ブロンテ『ジェイン・エア』刊行",   person:null, country:"イギリス", type:"event" },

  // ── 1848 ──
  { year:1848, date:"1月20日", cat:"政治（国内）", text:"クリスチャン8世　死去 / フレゼリク7世　即位", person:null, country:"デンマーク", type:"event" },
  { year:1848, date:"2月5日", cat:"文学", text:"ユイスマンス　生誕　パリ", person:"ジョリス＝カルル・ユイスマンス", country:"フランス",  type:"birth" },
  { year:1848, date:"4月8日", cat:"音楽", text:"ドニゼッティ　死去　ベルガモ（梅毒）", person:null, country:"イタリア", type:"death" },
  { year:1848, date:"1月24日", cat:"美術", text:"スリコフ　生誕　クラスノヤルスク", person:null, country:"ロシア",  type:"birth" },
  { year:1848, date:"8月7日", cat:"科学技術", text:"死去", person:"イェンス・ヤコブ・ベルセリウス", nameAlt: "Jöns Jakob Berzelius", country:"スウェーデン", place:"ストックホルム", type:"death" },

  // ── 1849 ──
  { year:1849, date:"2月9日",  cat:"政治（国際）", text:"ローマ共和国　樹立", person:null, country:"イタリア", type:"event" },
  { year:1849, date:null, cat:"政治（国内）", text:"ペトラシェフスキー事件 — ペトラシェフスキー逮捕", person:null, country:"ロシア", type:"event" },
  { year:1849, date:null, cat:"文学", text:"メリメ（フランス）プーシキン『スペードの女王』翻訳", person:null, country:"フランス", type:"event" },

  // ── 1850 ──
  { year:1850, date:"2月25日", cat:"政治（国際）", text:"道光帝　死去 / 咸豊帝　即位（清）", person:null, country:"清", type:"event" },
  { year:1850, date:"5月9日", cat:"科学技術", text:"死去　化学者", person:"ジョセフ・ルイ・ゲー＝リュサック", nameAlt: "Joseph Louis Gay-Lussac", country:"フランス", place:"パリ", type:"death" },
  { year:1850, date:"8月26日", cat:"要人", text:"ルイ・フィリップ王　死去　イギリス", person:null, country:"フランス/イギリス", type:"death" },
  { year:1850, date:null, cat:"科学技術", text:"英国アイルランド磁気電信会社、創立", person:null, nameAlt: "British and Irish Magnetic Telegraph Company", country:"イギリス", place:null, type:"event" },

  // ── 1851 ──
  { year:1851, date:null, cat:"政治（国内）", text:"ルイ・ナポレオンのクーデタ", person:null, country:"フランス", type:"event" },
  { year:1851, date:null, cat:"政治（国際）", text:"万国博覧会（ロンドン）", person:null, country:"イギリス", type:"event" },
  { year:1851, date:"3月11日", cat:"音楽", text:"ヴェルディ『リゴレット』ヴェネツィア・フェニーチェ座初演", person:"ジュゼッペ・ヴェルディ", country:"イタリア", type:"event" },
  { year:1851, date:"11月18日", cat:"美術", text:"死去", person:"ルイ・ジャック・マンデ・ダゲール", nameAlt: "Louis Jacques Mandé Daguerre", country:"フランス", place:"ヴァル＝ド＝マルヌ", type:"death" },

  // ── 1852 ──
  { year:1852, date:null, cat:"政治（国内）", text:"ナポレオン三世即位（フランス）12月", person:null, country:"フランス", type:"event" },
  { year:1852, date:null, cat:"文学", text:"マルクス『ルイ・ボナパルトのブリュメール18日』", person:null, country:"ドイツ", type:"event" },

  // ── 1853 ──
  { year:1853, date:null, cat:"政治（国内）",  text:"フランツ・ヨーゼフ帝暗殺未遂（ハンガリー人の仕立屋による）", person:null, country:"オーストリア", type:"event" },
  { year:1853, date:"12月18日",cat:"音楽", text:"サン＝サーンス『交響曲第一番』パリ初演", person:"カミーユ・サン＝サーンス", country:"フランス", type:"event" },

  // ── 1854 ──
  { year:1854, date:"1月1日", cat:"思想", text:"生誕（1941年没）　人類学者", person:"ジェイムズ・フレイザー", nameAlt: "James George Frazer", country:"イギリス", place:"グラスゴー", type:"birth" },
  { year:1854, date:null, cat:"政治（国際）",  text:"クリミア戦争にイギリスフランス参戦", person:null, country:"イギリス/フランス/ロシア",   type:"event" },
  { year:1854, date:"6月13日", cat:"音楽",text:"ヴェルディ『シチリアの晩鐘』ル・ペルティエ劇場初演", person:"ジュゼッペ・ヴェルディ", country:"フランス", type:"event" },

  // ── 1855 ──
  { year:1855, date:null, cat:"政治（国際）", text:"万国博覧会（パリ）",person:null, country:"フランス", type:"event" },
  { year:1855, date:"9月16日", cat:"要人",  text:"ウヴァーロフ　死去　モスクワ",  person:null,  country:"ロシア",   type:"death" },

  // ── 1856 ──
  { year:1856, date:"3月30日", cat:"政治（国内）", text:"アレクサンドル2世の演説 — 農奴制廃止が不可欠と公式表明", person:"アレクサンドル2世", country:"ロシア", type:"event" },
  { year:1856, date:"2月17日", cat:"文学", text:"死去（梅毒？）　パリ",  person:"ハインリヒ・ハイネ", country:"ドイツ/フランス",  type:"death" },
  { year:1856, date:"3月24日", cat:"政治（国際）", text:"タパタリ条約、締結　ネパール・チベット戦争の平和条約", person:null, nameAlt: "Treaty of Thapathali", country:"ネパール/チベット", place:"タパタリ宮殿", type:"event" },
  { year:1856, date:"5月", cat:"音楽", text:"ダルゴムィシスキー『ルサルカ』ペテルブルク・サーカス座初演", person:null, country:"ロシア",         type:"event" },

  // ── 1857 ──
  { year:1857, date:"2月15日", cat:"音楽", text:"グリンカ　死去　ベルリン", person:null, country:"ロシア/ドイツ", type:"death" },
  { year:1857, date:"3月12日", cat:"音楽", text:"『シモン・ボッカネグラ』ヴェネツィア・フェニーチェ劇場初演", person:"ジュゼッペ・ヴェルディ",      country:"イタリア", type:"event" },
  { year:1857, date:"7月30日", cat:"思想", text:"生誕（1929年没）", person:"ソースティン・ヴェブレン", nameAlt: "Thorstein Bunde Veblen", country:"アメリカ", place:"ウィスコンシン", type:"birth" },
  { year:1857, date:"9月18日", cat:"思想", text:"死去　東洋学者", person:"エティエンヌ・カトルメール", nameAlt: "Étienne Marc Quatremère", country:"", place:"パリ", type:"death" },
  { year:1857, date:null, cat:"文学", text:"トマス・ヒューズ『トム・ブラウンの学校生活』", person:null, country:"イギリス", type:"event" },

  // ── 1858 ──
  { year:1858, date:null,  cat:"政治（国内）", text:"ナポレオン三世暗殺未遂（オルシーニ事件）", person:null, country:"フランス", type:"event" },
  { year:1858, date:null, cat:"政治（国際）", text:"プロンビエール密約（フランス・イタリア）カヴールとナポレオン三世", person:null,  country:"フランス/イタリア", type:"event" },
  { year:1858, date:null, cat:"文学", text:"ボードレール『悪の華』刊行", person:null, country:"フランス", type:"event" },
  { year:1858, date:"10月3日", cat:"舞台芸術", text:"生誕　ロンバルディア", person:"エレオノーラ・ドゥーゼ", country:"イタリア", type:"birth" },
  { year:1856, date:null, cat:"科学技術", text:"モーヴの合成染料（最初の合成染料）を発明", person:"ウィリアム＝ヘンリー・パーキン", nameAlt: "William Henry Perkin", country:"イギリス", place:"ロンドン", type:"event" },

  // ── 1859 ──
  { year:1859, date:null, cat:"政治（国内）", text:"禁酒運動（ロシア）5月〜", person:null, country:"ロシア", type:"event" },
  { year:1859, date:null, cat:"政治（国際）", text:"第二次ドイツ立戦争（イタリアVSオーストリア）", person:null, country:"イタリア/オーストリア", type:"event" },
  { year:1859, date:"3月19日", cat:"音楽", text:"グノー『ファウスト』パリ・リリック座初演", person:null, country:"フランス", type:"event"},
  { year:1859, date:"4月8日", cat:"思想", text:"フッサール　生誕　モラヴィア", person:null, country:"オーストリア", type:"birth" },
  { year:1859, date:"10月18日", cat:"思想", text:"生誕（1941年没）", person:"アンリ・ベルクソン", nameAlt: "Henri Bergson", country:"フランス", place:"パリ", type:"birth" },
  { year:1859, date:null, cat:"科学技術", text:"分光器を発明", person:"ロベルト・ヴィルヘルム・ブンゼン、グスタフ・キルヒホッフ", nameAlt: "Robert Wilhelm Bunsen, Gustav Robert Kirchhoff", country:"ドイツ", place:null, type:"event" },
  { year:1856, date:null, cat:"科学技術", text:"マゼンタの合成染料、発明", person:"フランソワ＝エマニュエル・ヴェルガン", nameAlt: "François-Emmanuel Verguin", country:"フランス", place:null, type:"event" },
  { year:1859, date:null, cat:"メディア", text:"『科学ニュース』、創刊（1932年まで）", person:"ウィリアム・クルックス", nameAlt: ["Chemical News", "William Crookes" ], country:"イギリス", place:"ロンドン", type:"event" },

  // ── 1860 ──
  { year:1860, date:"3月13日", cat:"音楽", text:"生誕", person:"フーゴ・ヴォルフ", nameAlt: "Hugo Wolf", country:"オーストリア", place:"シュタイアーマルク", type:"birth" },
  { year:1860, date:"9月21日", cat:"思想", text:"ショーペンハウアー　死去　フランクフルト", person:null, country:"ドイツ", type:"death"},
  { year:1860, date:"1月29日", cat:"文学", text:"生誕", person:"アントン・チェーホフ", country:"ロシア", type:"birth" },
  { year:1860, date:"11月26日",cat:"舞台芸術", text:"マリー・タリオーニ振付『パピヨン』パリ・オペラ座初演", person:null, country:"フランス", type:"event" },
  { year:1860, date:null, cat:"科学技術", text:"『力と物質』出版（Richard Griffin and Co.より）", person:"マイケル・ファラデー", nameAlt: "Michael Faraday", country:"イギリス", place:null, type:"event" },

  // ── 1861 ──
  { year:1861, date:null, cat:"政治（国際）", text:"アメリカ南北戦争勃発（〜1865年）",  person:null, country:"アメリカ", type:"event" },
  { year:1861, date:"2月20日", cat:"文学", text:"ウジェーヌ・スクリーブ　死去　パリ", person:null, country:"フランス", type:"death" },
  { year:1861, date:"4月19日", cat:"科学技術", text:"死去　軍事技術者、火薬の権威", person:"チャールズ＝ウィリアム・パスレー", nameAlt: "Charles William Pasley", country:"イギリス", place:"ロンドン", type:"death" },
  { year:1861, date:null, cat:"科学技術", text:"『ロウソクの科学』（Griffin, Bohn and Co.より）", person:"マイケル・ファラデー",  nameAlt: "Michael Faraday", country:"イギリス", place:"", type:"event" },
  { year:1861, date:null, cat:"科学技術", text:"新元素タリウムを発見", person:"ウィリアム・クルックス", nameAlt: "William Crookes", country:"イギリス", place:null, type:"event" },

  // ── 1862 ──
  { year:1862, date:null, cat:"政治（国際）",  text:"万国博覧会（ロンドン）", person:null, country:"イギリス", type:"event" },
  { year:1862, date:"1月18日", cat:"舞台芸術", text:"プティパ振付『ファラオの娘』ボリショイ・カーメンヌィ劇場初演", person:null, country:"ロシア", type:"event" },
  { year:1862, date:"2月17日", cat:"文学", text:"森鴎外　生誕　石見（島根）", person:null, country:"日本", type:"birth" },

  // ── 1863 ──
  { year:1863, date:"1月17日", cat:"舞台芸術", text:"生誕　モスクワ", person:"コンスタンティン・スタニスラフスキー", country:"ロシア", type:"birth" },
  { year:1863, date:"1月23日", cat:"政治（国内）", text:"ポーランド蜂起", person:null, country:"ロシア", type:"event" },
  { year:1863, date:"7月30日", cat:"社会", text:"生誕（1947年没）", person:"ヘンリー・フォード", nameAlt: "Henry Ford", country:"アメリカ", place:"ミシガン", type:"birth" },

  // ── 1864 ──
  { year:1864, date:"3月10日", cat:"政治（国内）", text:"ルートヴィヒ2世　即位（バイエルン）", person:null, country:"ドイツ", type:"event" },
  { year:1864, date:"2月1日～", cat:"政治（国際）", text:"第2次シュレースヴィ戦争",  person:null, country:"デンマーク/普",type:"event"},
  { year:1864, date:"5月2日",  cat:"音楽", text:"マイアベーア　死去　パリ",   person:null, country:"ドイツ/フランス",  type:"death" },
  { year:1864, date:"5月15日", cat:"美術", text:"生誕", person:"ヴィルヘルム・ハマスホイ", country:"デンマーク", place: "コペンハーゲン", type:"birth" },
  { year:1864, date:"8月31日", cat:"思想", text:"死去（決闘）", person:"フェルディナント・ラッサール", nameAlt: "Ferdinand Johann Gottlieb Lassalle", country:"スイス", place:"カルージュ", type:"death" },
  { year:1864, date:"11月3日", cat:"科学技術", text:"死去", person:"フランソワ＝エマニュエル・ヴェルガン", nameAlt: "François-Emmanuel Verguin", country:"フランス", place:"イェール", type:"death" },

  // ── 1865 ──
  { year:1865, date:"1月14日", cat:"文学", text:"『エレン』刊行（ルイ・ダヴィル書店）", person:"ヴィリエ・ド・リラダン", country:"フランス", type:"event" },
  { year:1865, date:"1月19日", cat:"思想", text:"プルードン　死去　パリ", person:null, country:"フランス", type:"death" },
  { year:1865, date:"1月23日", cat:"要人", text:"　死去（大動脈解離）", person:"アルセーニー・アンドレーヴィチ・ザクレフスキー伯", country:"イタリア", place:"フィレンツェ",  type:"death" },
    { year:1786, date:"3月26日", cat:"科学技術", text:"死去　発明家", person:"トーマス・ハンコック", nameAlt: "Thomas Hancock", country:"イギリス", place:"ロンドン", type:"death" },
  { year:1865, date:"4月1日",   cat:"社会", text:"ローマ＝オルテ間　鉄道開通", person:null, country:"イタリア", place:null,  type:"event" },
  { year:1865, date:"4月15日", cat:"政治（国際）", text:"エイブラハム・リンカーン暗殺", person:null, country:"アメリカ", type:"death" },
  { year:1865, date:"4月24日", cat:"要人",  text:"死去（結核性髄膜炎）", person:"ニコライ・アレクサンドロヴィチ",  country:"フランス", place: "ニース", type:"death" },
  { year:1865, date:"6月9日",  cat:"音楽", text:"生誕　ノーレ・リュンデルセ", person:"カール・ニールセン", country:"デンマーク", type:"birth" },
  { year:1865, date:"6月10日", cat:"音楽", text:"ワーグナー『トリスタンとイゾルデ』バイエルン宮廷歌劇場初演",  person:null, country:"ドイツ", type:"event" },
  { year:1865, date:null, cat:"政治（国際）", text:"コーカンド汗国首都タシケント陥落（ロシア）", person:null, country:"ロシア", type:"event" },
  { year:1865, date:null, cat:"政治（国内）", text:"大臣委員会の議長職が独立", person:null, country:"ロシア",place:null,  type:"event" },
  { year:1865, date:null, cat:"医学・科学", text:"クロード・ベルナール『実験医学序説』", person:null, country:"フランス", place:null, type:"event" },
  { year:1865, date:null, cat:"新聞・雑誌", text:"初のハワイ語＝英語辞書　完成", person:null, country:"アメリカ", place:"ハワイ", type:"event" },

  // ── 1866 ──
  { year:1866, date:null, cat:"政治（国内）", text:"アブハジアで大規模農民蜂起",  person:null,  country:"ロシア", type:"event" },
  { year:1866, date:"3月6日", cat:"思想", text:"死去　神学者・哲学者・歴史家", person:"ウィリアム・ヒューウェル", nameAlt: "William Whewell", country:"イギリス", place:"ケンブリッジ", type:"death" },
  { year:1866, date:"4月～", cat:"政治（国際）", text:"プロイセン・イタリアの同盟", person:null, country:"プロイセン/イタリア", type:"event" },
  { year:1866, date:"10月", cat:"音楽",  text:"ブラームス『弦楽六重奏曲第二番』ボストン初演",  person:null, country:"アメリカ", place: "ボストン", type:"event" },
  { year:1866, date:"2月5日", cat:"舞台芸術", text:"オッフェンバック『青ひげ』ヴァリエテ座初演", person:null, country:"フランス", place: "パリ", type:"event" },

  // ―― 1867 ――
  { year:1867, date:"8月25日", cat:"科学技術", text:"死去", person:"マイケル・ファラデー", nameAlt: "Michael Faraday", country:"イギリス", place:"ハンプトンコート", type:"death" },
  { year:1867, date:"12月13日", cat:"科学技術", text:"生誕", person:"クリスチャン・ビルケランド", nameAlt: "Kristen Birkeland", country:"ノルウェー", place:"オスロ（クリスチャニア）", type:"birth" },
  { year:1867, date:"12月4日", cat:"思想", text:"死去　東洋学者", person:"ジョゼフ・レイノー", nameAlt: "Joseph Toussaint Reinaud", country:"フランス", place:"パリ", type:"death" },

  // ―― 1868 ――
  { year:1868, date:"8月29日", cat:"科学技術", text:"死去　化学者", person:"クリスチャン・シェーンバイン", nameAlt: "Christian Schönbein", country:"ドイツ", place:"バーデン＝バーデン", type:"death" }, 

  // ―― 1869 ――
  { year:1869, date:"10月2日", cat:"要人", text:"生誕（1948年没）", person:"マハトマ・ガンディー", nameAlt: "Mohandas Karamchand Gandi", country:"インド", place:"グジャラート", type:"birth" },

  // ―― 1870 ――
  { year:1870, date:"1月25日", cat:"要人", text:"死去　政治家", person:"ヴィクトル・ド・ブロイ公爵", nameAlt: "Achille Léonce Victor Charles de Broglie", country:"フランス", place:"パリ", type:"death" },

  // ―― 1872 ――
  { year:1872, date:"5月18日", cat:"思想", text:"生誕（1970年没）　哲学者", person:"バートランド・ラッセル", nameAlt: "Bertrand Arthur William Russell", country:"イギリス", place:"ウェールズ", type:"birth" },

  // ―― 1874 ――
  { year:1874, date:"9月12日", cat:"要人", text:"死去　政治家・歴史家", person:"フランホワ＝ピエー＝ギヨーム・ギゾー", nameAlt: "François-Pierre-Guillaume Guizot", country:"フランス", place:"リジュー", type:"death" },

  // ―― 1875 ――
  { year:1875, date:"3月27日", cat:"思想", text:"死去", person:"エドガー・キネ", nameAlt: "Edgar Quinet", country:"フランス", place:"ベルサイユ", type:"death" },

  // ―― 1877 ――
  { year:1877, date:"9月17日", cat:"科学技術", text:"死去", person:"ウィリアム・ヘンリー・フォックス・タルボット", nameAlt: "William Henry Fox Talbot", country:"イギリス", place:"ラコック", type:"death" },

  // ―― 1878 ――
  { year:1878, date:null, cat:"科学技術", text:"炭素フィラメント電球公開", person:"ジョゼフ・ウィルソン・スワン", nameAlt: "Joseph Wilson Swan", country:"イギリス", place:null, type:"event" },

  // ―― 1879 ――
  { year:1879, date:"2月19日", cat:"美術", text:"講演「民衆の芸術」", person:"ウィリアム・モリス", nameAlt: "William Morris", country:"イギリス", place:"バーミンガム美術デザイン学校", type:"event" },

  // ―― 1882 ――
  { year:1882, date:null, cat:"思想", text:"『悦ばしき知識』", person:"フリードリヒ・ニーチェ", nameAlt: "Friedrich Wilhelm Nietzsche", country:"ドイツ", place:null, type:"event" },

  // ―― 1884 ――
  { year:1884, date:"", cat:"科学技術", text:"ブリン法（液体酸素の大量生産）、開発", person:"[カンタン・・ブラン], [アルトゥール・レオン・ブラン]", nameAlt: "[Quentin Brin], [Arthur Leon Brin]", country:"", place:"", type:"event" },

  // ―― 1887 ――
  { year:1887, date:"10月17日", cat:"科学技術", text:"死去", person:"グスタフ・ロベルト・キルヒホッフ", nameAlt: "Gustav Robert Kirchhoff", country:"ドイツ", place:"ベルリン", type:"death" },

  // ―― 1888 ――
  { year:1888, date:"5月26日", cat:"科学技術", text:"死去　化学者", person:"アスカニオ・ソブレロ", nameAlt: "Ascanio Sobrero", country:"イタリア", place:"トリノ", type:"death" }, 

  // ―― 1891 ――
  { year:1891, date:"1月22日", cat:"思想", text:"生誕（1937年没）", person:"アントニオ・グラムシ", nameAlt: "Antonio Gramsci", country:"イタリア", place:"アーレス", type:"birth" }, 
  
  // ―― 1895 ――
  { year:1895, date:"2月14日", cat:"思想", text:"生誕（1973年没）", person:"マックス・ホルクハイマー", nameAlt: "Max Horkheimer", country:"ドイツ", place:"シュトゥットガルト", type:"birth" },

  // ―― 1896 ――
  { year:1896, date:"10月3日", cat:"美術", text:"死去（結核）", person:"ウィリアム・モリス", nameAlt: "William Morris", country:"イギリス", place:"ロンドン", type:"death" },
  { year:1896, date:"12月10日", cat:"科学技術", text:"死去（脳出血）", person:"アルフレッド・ノーベル", nameAlt: "Alfred Bernhard Nobel", country:"イタリア", place:"サンレモ", type:"death" },

  // ―― 1898 ――
  { year:1898, date:"7月19日", cat:"思想", text:"生誕（1979年没）", person:"ヘルベルト・マルクーゼ", nameAlt: "Herbert Marcuse", country:"ドイツ", place:"ベルリン", type:"birth" },

  // ―― 1899 ――
  { year:1899, date:"3月30日", cat:"科学技術", text:"生誕", person:"ロベルト・ヴィルヘルム・ブンゼン", nameAlt: "Robert Wilhelm Bunsen", country:"ドイツ", place:"ハイデルベルク", type:"death" },
  { year:1899, date:"9月20日", cat:"思想", text:"生誕（1973年没）", person:"レオ・シュトラウス", nameAlt: "Leo Strauss", country:"ドイツ", place:"キルヒハイン", type:"birth" },
  { year:1899, date:null, cat:"思想", text:"『有閑階級の理論』", person:"ソースティン・ヴェブレン", nameAlt: "Thorstein Bunde Veblen", country:"アメリカ", place:null, type:"event" },

  // ―― 1900 ――
  { year:1900, date:"3月23日", cat:"思想", text:"生誕（1980年没）", person:"エーリッヒ・フロム", nameAlt:"Erich Seligmann Fromm", country:"ドイツ", place:"フランクフルト", type:"birth" },
  { year:1900, date:"8月25日", cat:"思想", text:"死去", person:"フリードリヒ・ニーチェ", nameAlt: "Friedrich Wilhelm Nietzsche", country:"ドイツ", place:"ヴァイマール", type:"death" },
  { year:1900, date:null, cat:"科学技術", text:"コダック社のブローニー型、発売（最初の小型カメラ）", person:null, nameAlt: "Brownie, Kodak", country:"アメリカ", place:null, type:"event" },

  // ―― 1903 ――
  { year:1903, date:"2月22日", cat:"音楽", text:"死去", person:"フーゴ・ヴォルフ", nameAlt: "Hugo Wolf", country:"オーストリア", place:"ウィーン", type:"death" },
  { year:1903, date:"9月11日", cat:"思想", text:"生誕（1969年没）", person:"テオドール・アドルノ", nameAlt: "Theodor Ludwig Adorno-Wiesengrund", country:"ドイツ", place:"フランクフルト", type:"birth" },
  { year:1903, date:null, cat:"社会", text:"フォード・モーター社、設立", person:"ヘンリー・フォード", nameAlt: "[Ford Motor Company], [Henry Ford]", country:"アメリカ", place:"ミシガン", type:"event" },

  // ―― 1906 ――
  { year:1906, date:"1月12日", cat:"思想", text:"生誕（1995年没）", person:"エマニュエル・レヴィナス", nameAlt: "Emmanuel Lévinas", country:"リトアニア", place:"カウナス", type:"birth" },
  { year:1906, date:"10月14日", cat:"思想", text:"生誕（1975年没）", person:"ハンナ・アーレント", nameAlt: "Hannah Arendt", country:"ドイツ", place:"ハノーファー", type:"birth" },

  // ―― 1907 ――
  { year:1907, date:"12月10日", cat:"科学技術", text:"死去（肺炎）", person:"ウィリアム＝ヘンリー・パーキン", nameAlt: "William Henry Perkin", country:"イギリス", place:"サニングデール", type:"death" },

  // ―― 1908 ――
  { year:1908, date:"6月25日", cat:"思想", text:"生誕（2000年没）", person:"ウィラード・ヴァン・オーマン・クワイン", nameAlt: "Willard van Orman Quine", country:"アメリカ", place:"オハイオ", type:"birth" },
  { year:1908, date:"10月15日", cat:"思想", text:"生誕（2006年没）　経済学者", person:"ジョン・ガルブレイス", nameAlt: "John Kenneth Galbraith", country:"カナダ", place:"オンタリオ", type:"birth" },
  { year:1908, date:"11月28日", cat:"思想", text:"生誕（2009年没）", person:"クロード・レヴィ＝ストロース", nameAlt: "Claude Lévi-Strauss", country:"ベルギー", place:"ブリュッセル", type:"birth" },
  { year:1908, date:"", cat:"社会", text:"自動車「フォードT型」、発売", person:"フォード・モーター社", nameAlt: "[Ford Motor Company]", country:"アメリカ", place:"ミシガン", type:"event" },

  // ―― 1910 ――
  { year:1910, date:"2月9日", cat:"", text:"生誕（1976年没）　分子生物学者", person:"ジャック・モノー", nameAlt: "Jacques Monod", country:"フランス", place:"パリ", type:"birth" },
  { year:1910, date:"8月26日", cat:"宗教", text:"生誕（1997年没）", person:"マザー・テレサ", nameAlt: "Mother Teresa", country:"北マケドニア", place:"スコピエ", type:"birth" },

  // ―― 1911 ――
  { year:1911, date:"6月30日", cat:"科学技術", text:"死去　植物学者　", person:"ジョセフ・ダルトン・フッカー", nameAlt: "Joseph Dalton Hooker", country:"イギリス", place:"ヘイルスワース", type:"death" },
  { year:1842, date:"11月26日", cat:"思想", text:"死去（自死）", person:"ポール・ラファルグ", nameAlt: "Paul Lafargue", country:"フランス", place:"ドラヴェイユ", type:"death" },

  // ―― 1913 ――
  { year:1913, date:"1月11日", cat:"政治（国際）", text:"蒙蔵条約、締結　チベット・モンゴル相互承認条約", person:null, nameAlt: "Монгол-Төвөдийн гэрээ", country:"モンゴル/チベット", place:"ウルガ", type:"event" },

  // ―― 1914 ――
  { year:1914, date:"5月27日", cat:"科学技術", text:"死去　発明家", person:"ジョゼフ・ウィルソン・スワン", nameAlt: "Joseph Wilson Swan", country:"イギリス", place:"ウォーリンガム", type:"death" },

  // ―― 1917 ――
  { year:1917, date:"1月2日", cat:"思想", text:"死去　人類学者", person:"エドワード・バーネット・タイラー", nameAlt: "Edward Burnett Tylor", country:"イギリス", place:"ウェリントン", type:"death" },
  { year:1867, date:"6月15日", cat:"科学技術", text:"死去（自死）", person:"クリスチャン・ビルケランド", nameAlt: "Kristen Birkeland", country:"日本", place:"東京", type:"death" },

  // ―― 1919 ―― 
  { year:1919, date:"4月4日", cat:"科学技術", text:"生誕", person:"ウィリアム・クルックス", nameAlt: "William Crookes", country:"イギリス", place:"ロンドン", type:"death" },

];



// ══════════════════════════════════════════════
//  PERSONS — 人物辞書
//  人物名クリックでこのページが表示されます
// ══════════════════════════════════════════════

const PERSONS = {

  "ニコライ・アレクサンドロヴィチ": {
    nameAlt: "Николай Александрович (1843–1865)",
    born: "1843年9月20日　ペテルブルク",
    died: "1865年4月12日　ニース（結核）",
    country: "ロシア",
    cat: "要人",
    bio: `ロシア皇帝アレクサンドル2世の長男、皇太子。「ニクサ（Никса）」と呼ばれた。
知性と温厚な性格で周囲から愛された。デンマーク王女ダグマール（マリヤ・フョードロヴナ）と婚約したが、21歳で結核性髄膜炎により死去。
ポベドノスツェフらに薫陶を受け、自由主義的傾向を持つとされた。
彼の死後、婚約者ダグマールは弟アレクサンドル（のちのアレクサンドル3世）と結婚した。`,
    links: ["アレクサンドル3世", "アレクサンドル2世"],
  },

  "アレクサンドル2世": {
    nameAlt: "Александр II (1818–1881)",
    born: "1818年4月29日　モスクワ",
    died: "1881年3月13日　ペテルブルク（暗殺）",
    country: "ロシア",
    cat: "要人",
    bio: `「解放者皇帝」。1861年に農奴解放令を公布。司法・軍事・地方行政など大改革を断行。
1881年、「人民の意志」によって暗殺された。`,
    links: ["ニコライ・アレクサンドロヴィチ", "アレクサンドル3世"]
  },

  "アレクサンドル3世": {
    nameAlt: "Александр III (1845–1894)",
    born: "1845年3月10日　ペテルブルク",
    died: "1894年11月1日　リヴァディア",
    country: "ロシア",
    cat: "要人",
    bio: `ニクサの弟。兄の死後に皇太子となり、1881年に即位。
反動的な政策を推進し、兄の婚約者ダグマール（マリヤ・フョードロヴナ）と結婚した。`,
    links: ["ニコライ・アレクサンドロヴィチ", "アレクサンドル2世"]
  },

  "ジュゼッペ・ヴェルディ": {
    nameAlt: "Giuseppe Verdi (1813–1901)",
    born: "1813年10月10日　レ・ロンコーレ",
    died: "1901年1月27日　ミラノ",
    country: "イタリア",
    cat: "音楽",
    bio: `イタリア・オペラの巨匠。リソルジメント（統一運動）の象徴的存在でもあった。
代表作に『椿姫』『アイーダ』『オテロ』『ファルスタッフ』など。`,
    links: ["カミーユ・サン＝サーンス"]
  },

    "マイケル・ファラデー": {
   nameAlt: " Micharl Faraday (1791–1867)",
   born: "1791年9月22日　サリー",
   died: "1867年8月25日　ハンプトンコート",
   country: "イギリス",
   cat: "科学技術",
   bio: `1827年-8年のクリスマス講演：
   1. 11月29日(土)　物質一般――個体、液体、気体――科学親和力
   2. 1月1日(火)　　大気とその中の気体
   3. 1月3日(木)　　水とその元素
   4. 1月5日(土)　　硫酸、アンモニア、硫酸など
   5. 1月8日(火)　　硫酸、リン、炭素とその酸
   6. 1月10日(木)　 金属とその酸化物――大地、固定アルカリなど
   
   ファラデーのクリスマス公演一覧：
   1827: 化学（Chemistry）
   1829: 電気（Electricity）
   1832: 化学（Chemistry）
   1835: 電気（Electricity）
   1837: 化学（Chemistry）
   1841: 化学入門（The Rudiments of Chemistry）
   1843: 電気の第一原理（First Principles of Electricity）
   1845: 化学入門（The Rudiments of Chemistry）
   1848: ロウソクの科学（The Chemical History of a Candle）
   1851: 引力について（Attractive Forces）
   1852: 化学（Chemistry）
   1853: ヴォルタの電気（Voltaic Electricity）
   1854: 燃焼の化学（The Chemistry of Combustion）
   1855: ありふれた金属の特性（The Distinctive Properties of the Common Metals）
   1856: 引力について（Attractive Forces）
   1857: 静電気（Static Electricity）
   1858: 金属の性質（The Metallic Properties）
   1859: 力と物質（The Vatious Forces of Matter and Their Relations to Each Other）
   1860: ロウソクの科学（The Chemical History of a Candle）   `,
   links: [""]
  },

  "カミーユ・サン＝サーンス": {
    nameAlt: "Camille Saint-Saëns (1835–1921)",
    born: "1835年10月9日　パリ",
    died: "1921年12月16日　アルジェ",
    country: "フランス",
    cat: "音楽",
    bio: `フランスの作曲家・ピアニスト・オルガニスト。交響曲、協奏曲、室内楽など多岐にわたる。
代表作に『動物の謝肉祭』『サムソンとデリラ』『交響曲第3番』など。`,
    links: ["ジュゼッペ・ヴェルディ"]
  },

  "フェリックス・メンデルスゾーン": {
    nameAlt: "Felix Mendelssohn (1809–1847)",
    born: "1809年2月3日　ハンブルク",
    died: "1847年11月4日　ライプツィヒ",
    country: "ドイツ",
    cat: "音楽",
    bio: `ドイツ・ロマン派の作曲家。『夏の夜の夢』序曲、ヴァイオリン協奏曲などで知られる。
過労により38歳で死去。`
  },

  "ヴィリエ・ド・リラダン": {
    nameAlt: "Auguste de Villiers de l'Isle-Adam (1838–1889)",
    born: "1838年11月7日　サン＝ブリユー",
    died: "1889年8月19日　パリ",
    country: "フランス",
    cat: "文学",
    bio: `フランスの象徴主義作家。代表作に戯曲『アクセル』、短篇集『残酷な話』、
小説『未来のイヴ』など。ワーグナーに傾倒し、神秘主義・理想主義的世界観を持つ。`,
  },

  "ジョリス＝カルル・ユイスマンス": {
    nameAlt: "Joris-Karl Huysmans (1848–1907)",
    born: "1848年2月5日　パリ",
    died: "1907年5月12日　パリ",
    country: "フランス",
    cat: "文学",
    bio: `フランスの小説家。自然主義から象徴主義・耽美主義へと転向。
代表作『さかしま（À rebours）』はデカダン文学の金字塔。後年カトリックに回帰。`,
    links: ["ヴィリエ・ド・リラダン"]
  },

  "ハインリヒ・ハイネ": {
    nameAlt: "Heinrich Heine (1797–1856)",
    born: "1797年12月13日　デュッセルドルフ",
    died: "1856年2月17日　パリ",
    country: "ドイツ/フランス",
    cat: "文学",
    bio: `ドイツの詩人・ジャーナリスト。『歌の本』などで知られるロマン主義の代表的詩人。
晩年はパリに亡命し「マットラツェングルフト（マットレスの墓）」と称した病床で執筆を続けた。`
  },

  "アントン・チェーホフ": {
    nameAlt: "Антон Павлович Чехов (1860–1904)",
    born: "1860年1月29日　タガンログ",
    died: "1904年7月15日　バーデンヴァイラー（結核）",
    country: "ロシア",
    cat: "文学",
    bio: `ロシアの小説家・劇作家。短篇小説と戯曲の名手。
代表作に『桜の園』『三人姉妹』『かもめ』、短篇『退屈な話』など。`
  },

  "エレオノーラ・ドゥーゼ": {
    nameAlt: "Eleonora Duse (1858–1924)",
    born: "1858年10月3日　ヴィジェーヴァノ",
    died: "1924年4月21日　ピッツバーグ",
    country: "イタリア",
    cat: "舞台芸術",
    bio: `イタリアの舞台女優。サラ・ベルナールと並ぶ19世紀最大の女優と称された。
ダヌンツィオとの恋愛でも知られる。`
  },

  "コンスタンティン・スタニスラフスキー": {
    nameAlt: "Константин Сергеевич Станиславский (1863–1938)",
    born: "1863年1月17日　モスクワ",
    died: "1938年8月7日　モスクワ",
    country: "ロシア",
    cat: "舞台芸術",
    bio: `ロシアの演出家・俳優・演劇理論家。モスクワ芸術座の共同創設者。
「スタニスラフスキー・システム」は現代演技理論の基盤となった。`
  },

  "ヴィルヘルム・ハマスホイ": {
    nameAlt: "Vilhelm Hammershøi (1864–1916)",
    born: "1864年5月15日　コペンハーゲン",
    died: "1916年2月13日　コペンハーゲン",
    country: "デンマーク",
    cat: "美術",
    bio: `デンマークの画家。静謐な室内画で知られる。灰色と白を基調としたドイツ特の画風は
20世紀初頭のヨーロッパで高く評価された。`
  },

  "ピーター・カール・ファベルジェ": {
    nameAlt: "Peter Carl Fabergé (1846–1920)",
    born: "1846年5月30日　ペテルブルク",
    died: "1920年9月24日　ローザンヌ",
    country: "ロシア",
    cat: "美術",
    bio: `ロシアの宝飾師。皇室御用達の宝飾商として「ファベルジェの卵」を制作。
ロマノフ王朝の美術工芸を代表する存在。`
  },

  "カール・ニールセン": {
    nameAlt: "Carl Nielsen (1865–1931)",
    born: "1865年6月9日　ノーレ・リュンデルセ",
    died: "1931年10月3日　コペンハーゲン",
    country: "デンマーク",
    cat: "音楽",
    bio: `デンマーク最大の作曲家。6つの交響曲のほか、オペラ、弦楽四重奏曲などを残す。
グリーグと並ぶ北欧音楽の巨匠。`
  },

  "フレゼリク8世": {
    nameAlt: "Frederik VIII af Danmark (1843–1912)",
    born: "1843年6月3日　コペンハーゲン",
    died: "1912年5月14日　ハンブルク",
    country: "デンマーク",
    cat: "要人",
    bio: `デンマーク国王（在位1906–1912）。クリスチャン9世とルイーセの息子。
    弟にギリシャ王ヴィルヘルム1世、妹にイギリス皇太子妃アレクサンドラ、ロシア皇帝アレクサンドル3世妃マリヤ・フョードロヴナ。`,
    links: ["ニコライ・アレクサンドロヴィチ", "アレクサンドル3世"]
  },

  "カミーユ・ロクプラン": {
   nameAlt: "Camille Roqueplan (1803–1855)",
   born: "1803年2月18日",
   died: "1855年9月29日",
   country: "フランス",
   cat: "美術",
   bio: `フルネームはCamille Joseph Étienne Rocoplan。`,
  },
};
