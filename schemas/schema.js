import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import career from './career';
import podcast from './podcast';
import successStory from './successStory';
import internship from './internship';
import woman from './woman'
export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    career,
    podcast,
    successStory,
    internship,
    blockContent
  ]),
});
