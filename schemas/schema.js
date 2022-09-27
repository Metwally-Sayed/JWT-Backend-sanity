import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import landingImage from './landingImage';
import career from './career';
import podcast from './podcast';
import woman from './woman';
import internship from './internship';

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    career,
    landingImage,
    podcast,
    woman,
    internship,

    blockContent,
  ]),
});
