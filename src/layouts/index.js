import styles from './index.less';

function Layout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

export default Layout;
