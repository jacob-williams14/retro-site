interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface FileProps {
  file: DesktopFile;
}

export interface DesktopFile extends SanityBody {
  filename: string;
  image: Image;
}
