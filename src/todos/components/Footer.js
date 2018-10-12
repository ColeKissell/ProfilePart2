
import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
// import Chip from '@material-ui/core/Chip';







const Footer = () => (
  <React.Fragment>
      {/* <Chip
        label="Clickable Link Chip"
        // className={classes.chip}
        component="a"
        href="#chip"
        clickable
        
      /> */}
      Show:
      {' '}
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>

</React.Fragment>
)



export default Footer