import H2 from './H2';

const LearningNow = () => {
  return (
    <>
      <H2 heading2='学習中の言語' />
      <p>
        2024/12/24から
        <a
          href='https://www.rust-lang.org/ja'
          className='text-accent1 underline underline-offset-1'
          target='_blank'
          rel='noopener noreferrer'
        >
          Rust
        </a>
        の学習を始めました。
      </p>
      <p>
        JavaScript(最近はTypeScript)を学習していた私は、静的型付け言語を何か学習したいと考えていました。
        <br />
        Rustは、C言語の様な低レベル言語でありながら、安全性を重視している言語ということで選びました。
        <br />
        また、WebAssemblyとの親和性も高いということで、将来的にはWebAssemblyを使用した開発も行いたいと考えています。
      </p>
    </>
  );
};

export default LearningNow;
