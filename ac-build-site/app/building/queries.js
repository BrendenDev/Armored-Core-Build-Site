'use client'

function partQueryMaker(currentSelect) {

  if(currentSelect === 'R-ARM UNIT' || currentSelect === 'L-ARM UNIT') {
      return 'arm'; //original, non-preload, get from db query was: return {type: {$regex: 'arm'}};
  }
  else if(currentSelect === 'R-BACK UNIT' || currentSelect === 'L-BACK UNIT') {
      return 'back';
  }
  else {
      return currentSelect.toLowerCase();
  }
  
}

function menuQueryMaker(currentMenu) {
  switch (currentMenu) {
    case 'UNIT':
      return 'ACUnitSpecs';

    case 'FRAME':
      return 'ACFrameSpecs';

    case 'INNER':
      return 'ACInnerSpecs';

    case 'EXPANSION':
      return 'ACExpansionSpecs';

    default:
      throw new Error('Invalid menu option');
  }

}

export function getPartQuery(currentSelect) {

  const partQuery = partQueryMaker(currentSelect);

  return partQuery;

}