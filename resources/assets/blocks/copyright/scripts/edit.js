const {__} = wp.i18n;
const {RichText, BlockControls, AlignmentToolbar} = wp.blockEditor;
const { BaseControl, PanelBody, ResizableBox } = wp.components;

const edit = ( props ) => {
  const {attributes, setAttributes} = props;
  const {text, year, sitename, alignment} = attributes;

  setAttributes({year: new Date().getFullYear()});
  setAttributes({sitename: astratic_copyright_vars.site_title});

  const onChangeAlignment = (newAlignment) => {
    setAttributes({alignment: newAlignment})
  }

  const onChangeText = (newText) => {
    setAttributes({text: newText})
  }

  return (
    <>
      <div class="wp-block-astratic-copyright" aria-hidden>
        <p>
          <RichText
            onChange={onChangeText}
            value={text}
            tagName="span"
          />
          &copy; {year} {sitename}
        </p>
      </div>
    </>
  )
}

export default edit;
