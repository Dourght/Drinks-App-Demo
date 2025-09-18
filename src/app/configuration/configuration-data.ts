export type InstructionLanguageCode = 'en' | 'de' | 'es' | 'fr' | 'it';

export interface ConfigurationData {
  headerTitle: string;
  headerLogo: string;
  primaryColor: string;
  font: string;
  lightBackgroundColor: string;
  darkBackgroundColor: string;
  showDarkModeSwitch: boolean;
  darkModeDefault: boolean;
  showGridToggle: boolean;
  defaultGrid: boolean;
  footerText: string;
  footerLogo: string;
  instructionLanguages: Record<InstructionLanguageCode, boolean>;
}
