const Attribution = () => {
  return (
    <div className="mt-20 pb-8 text-center text-sm text-zinc-500">
      <p className="mb-2">
        Built with{" "}
        <a 
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Next.js
        </a>{" "}
        and deployed on{" "}
        <a 
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Vercel
        </a>{" "}
        by yours truly
      </p>
      <p>
        Glowing orb effect inspired by{" "}
        <a 
          href="https://codepen.io/jasesmith/pen/qqgvZe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Portal to Tomorrow
        </a>{" "}
        by{" "}
        <a 
          href="https://codepen.io/jasesmith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          @jasesmith
        </a>
      </p>
    </div>
  )
}

export default Attribution 