const edit = () => {
  const year = new Date().getFullYear();
  const sitename = 'Lorem ipsum';

  return (
    <>
      <div class="wp-block-astratic-copyright" aria-hidden>
        <p>&copy; { year } { sitename } </p>
      </div>
    </>
  )
}

export default edit;
