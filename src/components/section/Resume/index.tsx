import styles from './index.module.scss'

export const Resume = () => {
  return (
    <section id="resume" className="px-20 py-20 lg:px-40 lg:py-20">
      <div className="mx-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div>
          <div className={styles.cp_timeline03}>
            <div className={styles.timeline_group}>
              <span className={styles.time_year}>2024</span>
              <div className={styles.timeline_item}>
                <div className={styles.time}>
                  <span className={styles.time_day}>1</span>
                  <span className={styles.time_month}>Mar</span>
                </div>
                <div className={styles.desc}>
                  <p className={styles.flag}>Joined ??? Inc.</p>
                  内容
                </div>
              </div>
            </div>
            <div className={styles.timeline_group}>
              <span className={styles.time_year}>2022</span>
              <div className={styles.timeline_item}>
                <div className={styles.time}>
                  <span className={styles.time_day}>2</span>
                  <span className={styles.time_month}>May</span>
                </div>
                <div className={styles.desc}>
                  <p className={styles.flag}>Joined ??? Inc.</p>
                  内容
                </div>
              </div>
            </div>
            <div className={styles.timeline_group}>
              <span className={styles.time_year}>2020</span>
              <div className={styles.timeline_item}>
                <div className={styles.time}>
                  <span className={styles.time_day}>1</span>
                  <span className={styles.time_month}>Apr</span>
                </div>
                <div className={styles.desc}>
                  <p className={styles.flag}>Joined ??? Inc.</p>
                  内容
                </div>
              </div>
              <div className={styles.timeline_item}>
                <div className={styles.time}>
                  <span className={styles.time_day}>19</span>
                  <span className={styles.time_month}>Mar</span>
                </div>
                <div className={styles.desc}>
                  <p className={styles.flag}>
                    Graduated from Chiba College of Information and Accounting
                  </p>
                  内容
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
