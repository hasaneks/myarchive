import MasterPage from '../components/global/masterPage'
import cn from 'classnames'
import styles from './about.module.css'
export default function About() {
  return (
    <MasterPage style={{ padding: '20px' }}>
      <div className={styles.pageArea}>
        <div className={cn('container', styles.aboutProjectArea)}>
          <h3>Proje Hakkında</h3>
          <ul>
            <li>
              Proje <b>Next.js (React) framewrokü ile hazırlandı</b>
            </li>

            <li>
              Global state yönetimi için <b>Redux ve React.Context</b>{' '}
              kullandım.
            </li>

            <li>
              Next.js zero config prensibi ile çalışmakta ve bu sebeple
              içeresinde birçok default ayarı barındırmakta. Bunlardan en
              önemlilieri SSR ve Router yapısı. Bu yüzden projede{' '}
              <b>Next.js Router</b> kullanıldı.
            </li>

            <li>
              Projede <b>pages/api</b> altında tanımladığım <b>Node.js </b>
              End-pointleri yer almakta. Projede dummy bir Back-end kullanmak
              yerine iki end-point hazırladım. Bu End-pointler üzerinden tüm
              kitap/film kayıtlarını res servisi aracılığı ile alabilir,
              ekleyebilir ya da ID göre tek kayıt çağırabilirsiniz. DataBase
              olarak ise <b> Mongo DB kullandım</b>.
            </li>

            <li>
              Authentication için dummy kullandım çünkü back-end tarafında JWT
              entegrasyonu ile vakit kaybetmek istemedim. Context yapısı
              üzerinde her sayfada kullanıcının giriş yapıp yapmadığını
              sorgulayarak sayfaya yetkisi var ise gösteriyor yoksa Login
              sayfasına yönlendiriyorum. User Token local stroge üzerinde
              tutuluyor ve sayfa load olurken Local Storage üzerinde yer alan
              Token ile sorgu yapıyorum. Kullanıcı var ise bulunduğu sayfayı
              görüntüleyebiliyor yok ise Login sayfasına gidiyor.
            </li>

            <li>
              Request için <b>Axios ve Fetch </b>yapısını kullandım. Genelde
              projelerimde tek türde ilerlemeyi tercih ediyorum ve genelde Axios
              config ederek kullanıyorum.
            </li>

            <li>
              React Hook, Context gibi çözümleri ihtiyaçlarım doğrultusunda
              kullandım.
            </li>

            <li>
              Projede herhangi bir UI kit kullanmadım. CSS tarafında{' '}
              <b>PostCSS </b>
              kullandım. (Scss ve Less ile aynı Syntax'a sahip). Ayrıca Next.js
              ile Module.css kullandım, bunu en temel sebebi hem component ile
              kullanımı daha kolay oluyor, hemde Next.js ile Module.css
              kullanıldığında Unique Class Namelere sahip oluyoruz. Böylece
              proje büyüsede className çakışmasının önüne geçmiş olunuyor.
              Global style dosyalarımı da Styles altında tutuyorum.
            </li>

            <li>
              Form Validation için projede <b> React Hook Form </b> ve default
              HTML parametrelerini kullandım.
            </li>

            <li>
              Next.js ile geliştirdiğim proje Github reposu Vercel'a bağlı.
              (Next.js Geliştirici firmasının Cloud servisi). Herhangi bir
              Branch üzerindne Master'a kod çıktığında Hook aracılığı ile proje
              otomatik Deploy alınarak sunucuya gönderiliyor.
            </li>
          </ul>
        </div>
      </div>
    </MasterPage>
  )
}
