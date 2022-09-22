const { RichText} = wp.blockEditor;

const save = ({ attributes: {text, year, sitename}}) => {
  return (
    <>
      <div class="wp-block-astratic-copyright" aria-hidden>
        <p>
          <RichText.Content
            value={text}
            tagName="span"
          />
          &copy; { year } { sitename }
        </p>
      </div>
    </>
  )
}

export default save;