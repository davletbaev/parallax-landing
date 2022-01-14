import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Carousel from '@components/Carousel';

import * as styles from './Thumbnails.module.scss';

const cn = classnames.bind(styles);

type ThumbnailsProps =  {
  options: Array<{
    label: string,
    thumbnail: IGatsbyImageData | undefined
  }>,
  value: number,
  onChange: (value: number) => void,
}

const Thumbnails = ({ value, onChange, options }: ThumbnailsProps) => {
  const [ _value, setValue ] = useState(value);

  const inputClassNames = cn(
    'input',
    'visually-hidden'
  );

  const handleChange = (index: number) => () => {
    setValue(index);
    onChange(index);
  };

  const renderOptions = options.map(({ label, thumbnail }, index) => (
    <label className={ styles.option } key={ label }>
      <input 
        className={ inputClassNames }
        type="radio"
        name={ label }
        onChange={ handleChange(index) }
        checked={ _value === index }
      />
      <span className={ styles.label }>{ label }</span>
      <GatsbyImage className={ styles.thumbnail } image={ thumbnail as IGatsbyImageData } alt={ label } />
    </label>
  ));

  return (
    <div className={ styles.container }>
      <Carousel>
        { renderOptions }
      </Carousel>
    </div>
  );
};

export default Thumbnails;