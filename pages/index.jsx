import Layout from '../components/layout/main'
import Image from 'next/image'

const Index = () => <>
  <Layout title='Ushieru'>
    <div className="w-full h-full flex flex-col items-center justify-center px-5 sm:container">
      <div className="flex items-center rounded-full bg-gray-200 border-8 border-gray-200">
        <Image
          alt="ushieru's image"
          src='/profile.jpg'
          height={256}
          width={256}
          className="rounded-full"
        />
      </div>
      <p className="font-bold text-5xl sm:text-7xl mt-10">I'm Ushieru</p>
      <p className="text-3xl sm:text-5xl mt-3">Software Engineer</p>
      <p className="text-center text-md sm:text-xl mt-3">
        IBMer, entrepreneur, dance, theater and acrobatics enthusiast.
      </p>
      <div className="flex gap-3 mt-10">
        <a
          href="https://github.com/ushieru/"
          target="_blank"
          className="flex flex-col items-center"
        >
          <div className="flex items-center rounded-full bg-gray-200 border-2 border-gray-200 mb-2">
            <Image
              alt="ushieru's github"
              src='/github.svg'
              height={64}
              width={64}
              className="rounded-full"
            />
          </div>
          <p>Github</p>
        </a>
        <a
          href="https://g.dev/ushieru"
          target="_blank"
          className="flex flex-col items-center"
        >
          <div className="flex items-center rounded-full bg-gray-200 border-2 border-gray-200 mb-2">
            <Image
              alt="ushieru's google developer"
              src='/googleDeveloper.svg'
              height={64}
              width={64}
              className="rounded-full"
            />
          </div>
          <p className='truncate text-center'>Google Developer</p>
        </a>
        <a
          href="https://www.linkedin.com/in/uzielcocolan/"
          target="_blank"
          className="flex flex-col items-center"
        >
          <div className="flex items-center rounded-full bg-gray-200 border-2 border-gray-200 mb-2">
            <Image
              alt="ushieru's linkedin"
              src='/linkedin.svg'
              height={64}
              width={64}
              className="rounded-full"
            />
          </div>
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  </Layout>
</>

export default Index