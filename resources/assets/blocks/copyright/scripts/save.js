const {useBlockProps, RichText} = wp.blockEditor;

const save = ({ attributes: {text, year, sitename, alignment, showtitle}}) => {
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
          &copy; { year } { sitename }
        </p>
      </div>
    </>
  )
}

export default save;