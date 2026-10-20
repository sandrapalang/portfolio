import { Link } from '@/lib/i18n/navigation'
import { getHeader } from '@/lib/sanity/queries/get-header'

const Header = async () => {
  const header = await getHeader()

  return (
    <header>
      <h4>
        <Link href="/">{header?.name}</Link>
      </h4>
    </header>
  )
}

export default Header
