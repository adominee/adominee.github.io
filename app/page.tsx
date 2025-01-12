import Image from 'next/image'

// 各種 SNS Link 用コンポーネント

function SNSLinkComponent() {
  return (
    <div className="flex flex-row w-full">
      <a href="https://github.com/dorimiamn" target="_blank" rel="noopener noreferrer">
        <Image
          className='mx-2'
          src="/github-mark.png"
          width={50}
          height={50}
          alt="GitHub"
        />
      </a>
      <a href="https://x.com/dorimiamn" target="_blank" rel="noopener noreferrer">
        <Image
          className='mx-2'
          src="/logo-black-x.png"
          width={50}
          height={50}
          alt="Twitter"
        />
      </a>
      <a href="https://qiita.com/dorimiamn" target="_blank" rel="noopener noreferrer">
        <Image
          className='mx-2'
          src="/qiita-icon.png"
          width={50}
          height={50}
          alt="Qiita"
        />
      </a>
      <a href="https://misskey.kyoupro.com/@dorimiamn" target="_blank" rel="noopener noreferrer">
        <Image
          className='mx-2'
          src="/misskey_icon.png"
          width={50}
          height={50}
          alt="Misskey Kyoupro"
        />
      </a>
    </div>
  )
}

// プロフィール情報用コンポーネント
function MyProfileComponent() {
  return (
    <div className="container w-4/6 mx-auto my-10">
      <div className="flex flex-row">
        <Image
          className="rounded-full"
          src="/profile_icon_square.jpg"
          width={100}
          height={100}
          alt="Picture of dorimiamn's icon"
        />
        <div className="flex flex-col w-5/6 mx-4 my-0">
          <h1 className="text-4xl mb-2">dorimiamn</h1>
          <SNSLinkComponent />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

// スキル表示用のブロックコンポーネント
function CardBlockComponent({ name, comments }: { name: string, comments: string }) {
  return (
    <div className="grid grid-cols-3 gap-41608 my-3">
      <h3 className="text-2xl mr-6 mt-0 mb-auto whitespace-pre-wrap">{name}</h3>
      <p className='col-span-2 text-base mb-0 mt-auto whitespace-pre-wrap'>{comments}</p>
    </div>
  )
}

// スキル(使える言語やフレームワーク)
function MySkillComponent() {
  return (
    <div className="container w-4/6 mx-auto my-10">
      <div className="flex flex-col">
        <h2 className="text-3xl my-6">Skills</h2>
        <CardBlockComponent name="C++" comments="競技プログラミングで使っています。Highest は 905 です。業プロの書き方はできない。" />
        <CardBlockComponent name="Python" comments="大学の授業やインターンで使っています。型を意識して使っています。" />
        <CardBlockComponent name="TypeScript" comments="バイトや個人で使っています。最近型の楽しさがなんとなくわかってきた。" />
        <CardBlockComponent name="Next.js" comments="このサイトの作成に使用。React 含めてちょこちょこお世話になりそう。" />
      </div>
    </div>
  )
}

// 資格を表示するコンポーネント
// TODO: 資格名が二段組になってしまうのを修正する
function QualificationComponent() {
  return (
    <div className="container w-4/6 mx-auto my-10">
      <div className="flex flex-col">
        <h2 className="text-3xl my-6">Qualifications</h2>
        <CardBlockComponent name="ITパスポート" comments="2019 年に取得。" />
        <CardBlockComponent name="基本情報技術者試験" comments="2021 年に取得。" />
        <CardBlockComponent name="応用情報技術者試験" comments="2021 年に取得。" />
        <CardBlockComponent name="登録セキスぺ" comments="2024 年春季試験にて情報処理安全確保支援士試験に合格、2024 年 10 月に登録セキスぺに登録。" />
        <CardBlockComponent name="G 検定" comments="2022 年に取得。" />
        <CardBlockComponent name="色彩検定 3 級" comments="2024 年に取得。" />
        <CardBlockComponent name="色彩検定 UC 級" comments="2024 年に取得。" />
      </div>
    </div>
  )
}

export default function TopPage() {
  return (
    <div>
      <MyProfileComponent />
      <MySkillComponent />
      <QualificationComponent />
    </div>
  )
}