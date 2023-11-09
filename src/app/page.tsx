import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex items-center'>
      <div>
        <h2 className='pb-2 text-4xl font-bold'>Dmitriy Sivritkin</h2>
        <p>
          🌌 I am Frontend Developer (TypeScript, React, Next). Сaffeine converter to React&apos;s
          magic. 💫
        </p>
      </div>
      <Image
        width='100'
        height='100'
        className='ml-6 rounded-full border-2 border-neutral-100 object-cover'
        src='/images/me.jpg'
        alt="Sivritkin's Dmitriy Image"
      />
    </div>
  );
}
