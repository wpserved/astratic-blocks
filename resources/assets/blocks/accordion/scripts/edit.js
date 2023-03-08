const { __ } = wp.i18n;

const { useSelect } = wp.data;
const {
  RichText,
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
  useSetting,
  store,
} = wp.blockEditor;

export default function edit(attributes, setAttributes, clientId) {

  const { hasInnerBlocks, themeSupportsLayout } = useSelect(
    (select) => {
      const { getBlock, getSettings } = select(store);
      const block = getBlock(clientId);
      return {
        hasInnerBlocks: !!(block && block.innerBlocks.length),
        themeSupportsLayout: getSettings()?.supportsLayout,
      };
    },
    [clientId]
  );
  const { tagName: TagName = 'div', templateLock, layout = {}, text } = attributes;

  const defaultLayout = useSetting('layout') || {};
  const usedLayout = !!layout && layout.inherit ? defaultLayout : layout;
  const { type = 'default' } = usedLayout;
  const layoutSupportEnabled = themeSupportsLayout || type !== 'default';

  const blockProps = useBlockProps({
    className: `is-layout-${type}`,
  });

  const onChangeText = (newText) => {
    attributes.setAttributes({ text: newText })
  }

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

  return (

    <div
      {...useBlockProps({
        className: "wp-block-astratic-accordion"
      })}
    >
      <button
        className="wp-block-astratic-accordion__toggler"
      >
        <RichText
          onChange={onChangeText}
          value={text}
          tagName="span"
          placeholder={__('Type...', 'astratic-blocks')}
        />
      </button>

      <div className="wp-block-astratic-accordion__content">
        {layoutSupportEnabled && <TagName {...innerBlocksProps} />}

        {!layoutSupportEnabled && (
          <TagName {...blockProps}>
            <div {...innerBlocksProps} />
          </TagName>
        )}
      </div>
    </div>
  )
}