import { Link } from '@/lib/i18n/navigation'
import { getHeader } from '@/lib/sanity/queries/get-header'

const Header = async () => {
  const header = await getHeader()

  return (
    <header>
      <h5 className="spacing">
        <Link href="/">{header?.name}</Link>
      </h5>
    </header>
  )
}

export default Header
