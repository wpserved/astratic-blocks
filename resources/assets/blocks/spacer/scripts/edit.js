/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { useState } = wp.element;
const { __ } = wp.i18n;
const { InspectorControls} = wp.blockEditor;
const { BaseControl, PanelBody, ResizableBox } = wp.components;
const { withInstanceId } = wp.compose;

const SpacerEdit = ({ attributes, isSelected, setAttributes, toggleSelection, instanceId, clientId }) => {
  const { height, heightMobile, heightTablet, heightHorizontalTablet } = attributes;
	const id = `block-spacer-height-input-${ instanceId }`;
  const [ inputHeightValue, setInputHeightValue ] = useState( height );
  const breakpointsList = [
    {
      label: __('Height in pixels for mobile devices', 'astratic-blocks'),
      slug: 'heightMobile',
      heightMobile
    },
    {
      label: __('Height in pixels for tablet devices', 'astratic-blocks'),
      slug: 'heightTablet',
      heightTablet
    },
    {
      label: __('Height in pixels for horizontal tablet devices', 'astratic-blocks'),
      slug: 'heightHorizontalTablet',
      heightHorizontalTablet
    }
  ];

  const randomizeId = () => {
    return '_' + (
      Number(String(Math.random()).slice(2)) +
      Date.now() +
      Math.round(performance.now())
    ).toString(36);
  }

  const createRandomId = () => {
    if (attributes.id === '') {
      setAttributes({ id: `spacer${randomizeId()}` });
    }
  }

  const handleResizeStop = (event, direction, elt, delta) => {
    const spacerHeight = parseInt(height + delta.height, 10);
    setAttributes({ height: spacerHeight });
    setAttributes({ heightMobile: parseInt( (spacerHeight / 4), 10 ) });
    setAttributes({ heightTablet: parseInt( (spacerHeight / 3), 10 ) });
    setAttributes({ heightHorizontalTablet: parseInt( (spacerHeight / 2), 10 ) });
    setInputHeightValue(spacerHeight);
    setAttributes({ id: `spacer${randomizeId()}` });
    toggleSelection(true);
  };

  const handleControlsResize = event => {
    let spacerHeight = parseInt( event.target.value, 10 );
    setInputHeightValue(spacerHeight);
    if (isNaN(spacerHeight)) {
      // Set spacer height to default size and input box to empty string
      setInputHeightValue('');
      spacerHeight = 100;
    } else if (spacerHeight < 10) {
      // Set spacer height to minimum size
      spacerHeight = 10;
    }
    setAttributes({ height: spacerHeight });
    setAttributes({ heightMobile: parseInt( (spacerHeight / 4), 10 ) });
    setAttributes({ heightTablet: parseInt( (spacerHeight / 3), 10 ) });
    setAttributes({ heightHorizontalTablet: parseInt( (spacerHeight / 2), 10 ) });
    setAttributes({ id: `spacer${randomizeId()}` });
  };

  const handleResponsiveControlsResize = (event, variableName) => {
    let height = parseInt(event.target.value, 10);
    if (isNaN(height)) {
      height = 100;
    }
    // TODO: Find better way to recognize breakpoints
    switch (variableName) {
      case 'heightMobile':
        setAttributes({ heightMobile: height });
        break;
      case 'heightTablet':
        setAttributes({ heightTablet: height });
        break;
      case 'heightHorizontalTablet':
        setAttributes({ heightHorizontalTablet: height });
        break;
    }
    setAttributes({ id: `spacer${randomizeId()}` });
  };

  const renderHeightControls = (breakpoint, index) => {
    const id = `block-spacer-responsive-height-input-${ index }`
    return (
      <BaseControl label={ breakpoint.label } id={ id }>
        <input
          type="number"
          id={ id }
          onChange={ event => handleResponsiveControlsResize(event, breakpoint.slug) }
          value={ breakpoint[breakpoint.slug] }
          min="10"
          step="10"
        />
      </BaseControl>
    )
  }

	return (
		<>
      { createRandomId() }
			<ResizableBox
				className={ classnames('block-astratic-spacer__resize-container', { 'is-selected': isSelected }) }
				size={ { height } }
				minHeight="10"
				enable={ {
					top: false,
					right: false,
					bottom: true,
					left: false,
					topRight: false,
					bottomRight: false,
					bottomLeft: false,
					topLeft: false,
				} }
				onResizeStop={ handleResizeStop }
				onResizeStart={ () => { toggleSelection( false ); } }
			/>
			<InspectorControls>
				<PanelBody title={ __('Spacer Settings') }>
					<BaseControl label={ __('Height in pixels') } id={ id }>
						<input
							type="number"
							id={ id }
							onChange={ handleControlsResize }
							value={ inputHeightValue }
							min="10"
							step="10"
						/>
					</BaseControl>
				</PanelBody>
        <PanelBody title={ __('Responsive Settings', 'astratic-blocks') } initialOpen={ false }>
          { breakpointsList.map(renderHeightControls) }
        </PanelBody>
			</InspectorControls>
		</>
	);
};

export default withInstanceId( SpacerEdit );
