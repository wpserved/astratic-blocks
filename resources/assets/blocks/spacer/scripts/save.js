const save = ({ attributes: { id, height, heightMobile, heightTablet, heightHorizontalTablet }}) => {
  return (
    <>
      <div id={ id } class="wp-block-astratic-spacer" aria-hidden>
        <style type="text/css" dangerouslySetInnerHTML={{__html: `#${id}{margin-top:${heightMobile}px}@media(min-width: 768px){#${id}{margin-top:${heightTablet}px}}@media(min-width:992px){#${id}{margin-top:${heightHorizontalTablet}px}}@media(min-width:1200px){#${id}{margin-top:${height}px}}`}}></style>
      </div>
    </>
  )
}

export default save;
