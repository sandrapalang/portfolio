import styles from '@/components/pill.module.scss'

type PillProps = {
  label: string
}

const Pill = ({ label }: PillProps) => {
  return <span className={styles.pill}>{label}</span>
}

export default Pill
