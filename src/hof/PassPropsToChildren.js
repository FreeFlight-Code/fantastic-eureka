import React from 'react'

export default function PassPropsToChildren (props){
	const {children} = props
	const newProps = {...props}
	delete newProps.children; // we don't want to duplicate children
	return React.Children.map(children, function (child) {
    return React.cloneElement(child, newProps);
  });
}