import React from 'react';

function addStoriesGroup(Comp, storiesList, stories) {
  stories
    .add('All Together',
      () => <div>
        {storiesList.map(story => (
          <div key={story.name} style={{ marginTop: '25px' }}>
            <h1 style={{ marginBottom: '25px' }}> {story.name} </h1>
            <div>
              <Comp {...story.props} />
            </div>
          </div>
        ))}
      </div>
    );
  storiesList
    .forEach((story) => stories.add(story.name, () => <Comp {...story.props} />));
  return stories;
}

export default {
  addStoriesGroup(Comp, storiesList) {
    console.log(storiesList);
    addStoriesGroup(Comp, storiesList, this);
  },
};
