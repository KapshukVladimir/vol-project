import { Injectable } from '@angular/core';

import { AiIcon } from './ai-icons';

@Injectable({
  providedIn: 'root',
})
export class AiIconsRegistryService {
  private registry = new Map<string, string>();

  public registerIcons(icons: AiIcon[]): void {
    icons.forEach((icon: AiIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`,
      );
    }
    return this.registry.get(iconName);
  }
}
