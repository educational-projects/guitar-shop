type TitleProps = {
  title: string,
}

function Title({title}: TitleProps): JSX.Element {
  return (
    <h1 className="page-content__title title title--bigger">{title}</h1>
  );
}

export default Title;
