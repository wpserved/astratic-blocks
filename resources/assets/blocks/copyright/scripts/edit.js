const edit = () => {
  const year = new Date().getFullYear();
  const sitename = script_vars.site_title;

  return (
    <>
      <div class="wp-block-astratic-copyright" aria-hidden>
        <p>&copy; { year } { sitename } </p>
      </div>
    </>
  )
}

export default edit;
