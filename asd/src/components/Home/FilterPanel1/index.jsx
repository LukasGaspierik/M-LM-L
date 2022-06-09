import React from 'react';
import { categoryList, ratingList } from '../../../constants/index1';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import './styles.css';

const FilterPanell = ({
    selectedCategory,
    selectCategory,
    selectedRating,
    selectedPrice,
    selectRating,
    cuisines,
    changeChecked,
    changePrice,
  }) => (
    <div>
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      <div className='input-group'>
        <p className='label'>Brand</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      <div className='input-group'>
        <p className='label-range'>Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );

export default FilterPanell;