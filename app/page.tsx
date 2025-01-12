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

// スキル・資格などなど

function MySkillComponent() {
    return (
        <div className="container w-4/6 mx-auto my-10">
            <div className="flex flex-row">
                <h2 className="text-2xl">Skills</h2>
            </div>
            <div className="flex flex-row">
                <h2 className="text-2xl">Certificates</h2>
            </div>
        </div>
    )
}

export default function TopPage() {
    return (
        <div>
            <MyProfileComponent />
            <MySkillComponent />
        </div>
    )
  }