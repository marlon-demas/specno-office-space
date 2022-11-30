import { createAnimation } from '@ionic/angular';
const DURATION = 200;

const getIonPageElement = (element: HTMLElement) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(
    ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
  );
  if (ionPage) {
    return ionPage;
  }

  return element;
};

export const getPageAnimation = (_: HTMLElement, opts: any) => {
  const rootTransition = createAnimation()
    .duration(opts.duration || DURATION)
    .easing('cubic-bezier(.58,.01,.27,.99)');

  const enteringPage = createAnimation()
    .addElement(getIonPageElement(opts.enteringEl))
    .beforeRemoveClass('ion-page-invisible');

  const leavingPage = createAnimation().addElement(
    getIonPageElement(opts.leavingEl)
  );

  if (opts.direction === 'forward') {
    enteringPage
      .fromTo('transform', 'translateX(50%)', 'translateX(0)')
      .fromTo('opacity', '0', '1');
    leavingPage
      .fromTo('transform', 'translateX(0%)', 'translateX(-50%)')
      .fromTo('opacity', '1', '0');
  } else {
    leavingPage
      .fromTo('transform', 'translateX(0%)', 'translateX(50%)')
      .fromTo('opacity', '1', '0');
    enteringPage
      .fromTo('transform', 'translateX(-50%)', 'translateX(0%)')
      .fromTo('opacity', '0', '1');
  }

  rootTransition.addAnimation(enteringPage);
  rootTransition.addAnimation(leavingPage);
  return rootTransition;
};


