import Link from 'next/link'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Linkedin' },
  { href: 'https://nextjs.org/docs', label: 'Instagram' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center px-8 py-2">
        <li>
          <Link href="/">
            <p className="text-3xl flex justify-between no-underline">"👨‍💻   👨‍🚀    👨‍🎓"</p>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline px-2 py-1">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
