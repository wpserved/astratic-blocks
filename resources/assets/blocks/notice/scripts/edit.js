const { __ } = wp.i18n;

const { useSelect } = wp.data;
const {
  InnerBlocks,
  useBlockProps,
  InspectorControls,
  useInnerBlocksProps,
  useSetting,
  store,
} = wp.blockEditor;
const {
  PanelBody,
  RangeControl,
  SelectControl 
} = wp.components;

const htmlElementMessages = {
	header: __(
		'The <header> element should represent introductory content, typically a group of introductory or navigational aids.'
	),
	main: __(
		'The <main> element should be used for the primary content of your document only. '
	),
	section: __(
		"The <section> element should represent a standalone portion of the document that can't be better represented by another element."
	),
	article: __(
		'The <article> element should represent a self contained, syndicatable portion of the document.'
	),
	aside: __(
		"The <aside> element should represent a portion of a document whose content is only indirectly related to the document's main content."
	),
	footer: __(
		'The <footer> element should represent a footer for its nearest sectioning element (e.g.: <section>, <article>, <main> etc.).'
	),
};

const newId = Math.floor(Math.random() * 100000)

export default function edit( attributes, setAttributes, clientId) {

  const { hasInnerBlocks, themeSupportsLayout } = useSelect(
		( select ) => {
			const { getBlock, getSettings } = select( store );
			const block = getBlock( clientId );
			return {
				hasInnerBlocks: !! ( block && block.innerBlocks.length ),
				themeSupportsLayout: getSettings()?.supportsLayout,
			};
		},
		[ clientId ]
	);
	const defaultLayout = useSetting( 'layout' ) || {};
	const { tagName: TagName = 'div', templateLock, layout = {} } = attributes;
  const noticeReload = attributes.attributes.noticeReload;
  const noticeId = attributes.attributes.noticeId;
	const usedLayout = !! layout && layout.inherit ? defaultLayout : layout;
	const { type = 'default' } = usedLayout;
	const layoutSupportEnabled = themeSupportsLayout || type !== 'default';

	const blockProps = useBlockProps( {
		className: `is-layout-${ type }`,
	} );

	const innerBlocksProps = useInnerBlocksProps(
		layoutSupportEnabled
			? blockProps
			: { className: 'wp-block-group__inner-container' },
		{
			templateLock,
			renderAppender: hasInnerBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
			__experimentalLayout: layoutSupportEnabled ? usedLayout : undefined,
		}
	);

  attributes.setAttributes({noticeId: newId})

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Notice Settings', 'astratic-blocks')}>
          <RangeControl
            label={__('Show again after days')}
            value={noticeReload}
            min={0}
            max={365}
            step={1}
            onChange={ ( value ) => 
              attributes.setAttributes( { noticeReload: value } )
            }
          />
        </PanelBody>
      </InspectorControls>
      <InspectorControls __experimentalGroup="advanced">
        <SelectControl
          label={ __( 'HTML element' ) }
          options={ [
            { label: __( 'Default (<div>)' ), value: 'div' },
            { label: '<header>', value: 'header' },
            { label: '<main>', value: 'main' },
            { label: '<section>', value: 'section' },
            { label: '<article>', value: 'article' },
            { label: '<aside>', value: 'aside' },
            { label: '<footer>', value: 'footer' },
          ] }
          value={ TagName }
          onChange={ ( value ) =>
            setAttributes( { tagName: value } )
          }
          help={ htmlElementMessages[ TagName ] }
        />
      </InspectorControls>

      <div className="wp-block-notice">
        { layoutSupportEnabled && <TagName { ...innerBlocksProps } /> }
        { ! layoutSupportEnabled && (
          <TagName { ...blockProps }>
            <div { ...innerBlocksProps } />
          </TagName>
        ) }

        <button className="wp-block-notice__button-close">
          X
        </button>
      </div>
    </>
  )
}