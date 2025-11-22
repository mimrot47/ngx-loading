// 🧩 ngx-loading-config.ts

// Use a strongly typed enum for better IntelliSense and safety
export enum NgxLoadingAnimationTypes {
  ChasingDots = 'chasing-dots',
  Circle = 'sk-circle',
  CircleSwish = 'circleSwish',
  CubeGrid = 'sk-cube-grid',
  DoubleBounce = 'double-bounce',
  None = 'none',
  Pulse = 'pulse',
  RectangleBounce = 'rectangle-bounce',
  RotatingPlane = 'rotating-plane',
  ThreeBounce = 'three-bounce',
  WanderingCubes = 'wandering-cubes',
}

// Strongly typed interface for configuration
export interface INgxLoadingConfig {
  backdropBorderRadius?: string;
  backdropBackgroundColour?: string;
  fullScreenBackdrop?: boolean;
  animationType?: NgxLoadingAnimationTypes;
  primaryColour?: string;
  secondaryColour?: string;
  tertiaryColour?: string;
  [key: string]: string | boolean | NgxLoadingAnimationTypes | undefined;
}

// Configuration class with defaults and safe constructor
export class NgxLoadingConfig implements INgxLoadingConfig {
  backdropBorderRadius?: string;
  backdropBackgroundColour?: string;
  fullScreenBackdrop?: boolean;
  animationType?: NgxLoadingAnimationTypes;
  primaryColour?: string;
  secondaryColour?: string;
  tertiaryColour?: string;

  // Allow flexible property keys
  [key: string]: string | boolean | NgxLoadingAnimationTypes | undefined;

  constructor(config: INgxLoadingConfig = {}) {
    this.backdropBorderRadius = config.backdropBorderRadius ?? '0px';
    this.backdropBackgroundColour = config.backdropBackgroundColour ?? 'rgba(0, 0, 0, 0.3)';
    this.fullScreenBackdrop = config.fullScreenBackdrop ?? false;
    this.animationType = config.animationType ?? NgxLoadingAnimationTypes.ThreeBounce;
    this.primaryColour = config.primaryColour ?? '#ffffff';
    this.secondaryColour = config.secondaryColour ?? '#ffffff';
    this.tertiaryColour = config.tertiaryColour ?? '#ffffff';
  }
}

// ✅ Constant export for template bindings (optional)
export const ngxLoadingAnimationTypes = NgxLoadingAnimationTypes;
