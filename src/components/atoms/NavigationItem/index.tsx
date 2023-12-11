interface NavigationItemPrpos {
  title: string
  url: string
  mobile: boolean
}

const styles = (mobile: boolean): string => {
  if (mobile) {
    return '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
  }
  return 'text-sm font-semibold leading-6 text-gray-900'
}

export const NavigationItem = ({
  title,
  url,
  mobile,
  ...props
}: NavigationItemPrpos) => {
  return (
    <a href={url} className={styles(mobile)}>
      {title}
    </a>
  )
}
