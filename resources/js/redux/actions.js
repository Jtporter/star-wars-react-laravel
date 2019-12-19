// ACTION TYPES
export const FETCH_PEOPLE = 'FETCH_PEOPLE'
export const FETCH_PERSON_BY_ID = 'FETCH_PERSON_BY_ID'
export const FETCH_PLANETS = 'FETCH_PLANETS'
export const FETCH_PLANET_BY_ID = 'FETCH_PLANET_BY_ID'

// OTHER CONSTANTS

export const visibilityFilters = {
  SHOW_LIST: true
}

// ACTION CREATORS

export function fetchPeople(val) {
  return { type: FETCH_PEOPLE, val }
}

export function fetchPersonById(val) {
  return { type: FETCH_PERSON_BY_ID, val }
}

export function fetchPlanets(val) {
  return { type: FETCH_PLANETS, val }
}

export function fetchPlanetById(val) {
    return { type: FETCH_PLANET_BY_ID, val }
  }
