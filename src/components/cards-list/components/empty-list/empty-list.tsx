import styles from './empty-list.module.css';

function EmptyList(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>По вашему запросу ничего не найдено</h1>
      <p>попробуйте установить более мягкие ограничения</p>
    </div>
  );
}

export default EmptyList;
