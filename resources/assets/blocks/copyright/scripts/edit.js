const {__} = wp.i18n;
const {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;

const edit = ( props ) => {
  const {attributes, setAttributes} = props;
  const {text, year, sitename, textafter, alignment, showtitle} = attributes;

  setAttributes({year: new Date().getFullYear()});
  setAttributes({sitename: astratic_copyright_vars.site_title});

  const onChangeAlignment = (newAlignment) => {
    setAttributes({alignment: newAlignment})
  }

  const onChangeText = (newText) => {
    setAttributes({text: newText})
  }

  const onChangeTextafter = (newText) => {
    setAttributes({textafter: newText})
  }

  const toggleShowtitle = () => {
    setAttributes({showtitle: !showtitle})
  }

  return (
    <>
      <BlockControls controls={[
        {
          icon: "bank",
          title: __('Blog title', 'astratic-blocks'),
          onClick: toggleShowtitle,
          isActive: showtitle,
        }
      ]}>
        <AlignmentToolbar
          value={alignment}
          onChange={onChangeAlignment}
        />
      </BlockControls>

      <div
        {...useBlockProps({
          className: "wp-block-astratic-copyright"
        })}
        aria-hidden
      >
        <p className={`wp-block-astratic-copyright-alignment-${alignment}`}>
          <RichText
            onChange={onChangeText}
            value={text}
            tagName="span"
          />
          &copy; {year} {showtitle ?
            sitename :
            <RichText
            onChange={onChangeTextafter}
            value={textafter}
            placeholder={__('Type...', 'astratic-blocks')}
            tagName="span"
            />
          }
        </p>
      </div>
    </>
  )
}

export default edit;
