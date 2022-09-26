const {useBlockProps, RichText} = wp.blockEditor;

const save = ({ attributes: {text, alignment, showtitle, textafter}}) => {
  return (
    <>
      <div 
        {...useBlockProps.save({
          className: "wp-block-astratic-copyright"
        })}
       aria-hidden
      >
        <p className={`wp-block-astratic-copyright-alignment-${alignment}`}>
          <RichText.Content
            value={text}
            tagName="span"
          />
          &copy; <span id="copy-year"></span> { showtitle ? 
            <span id="copy-sitename"></span> :
            <RichText.Content
              value={textafter}
              tagName="span"
            />
          }
        </p>
      </div>
    </>
  )
}

export default save;