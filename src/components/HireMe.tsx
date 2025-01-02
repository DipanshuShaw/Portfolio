import React from 'react'

const HireMe = () => {
  return (
    <button className="relative inline-flex h-10 mx-4 overflow-hidden rounded-2xl p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl dark:bg-neutral-950 bg-stone-100 px-3 py-1 text-sm font-medium dark:text-white backdrop-blur-3xl">
        Hire Me
      </span>
    </button>
  )
}

export default HireMe
