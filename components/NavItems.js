import Link from 'next/link'

const NavItem = ({href, text, active}) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={`nav__link ${active ? "active" : '' }`}> 
        {text}
      </a>
    </Link>
  )
}

export default NavItem;