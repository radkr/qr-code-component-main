import { render, screen } from "@testing-library/react";
import QRCodeModal from "@/app/_components/qr-code-modal/qr-code-modal";

describe("QqCode Component", () => {
  test("Renders: qr code", () => {
    render(<QRCodeModal />);
    const pitch = screen.getByAltText(/QR Code/i);
    expect(pitch).toBeInTheDocument();
  });

  test("Renders: pitch", () => {
    render(<QRCodeModal />);
    const pitch = screen.getByText(
      /Improve your front-end skills by building projects/i
    );
    expect(pitch).toBeInTheDocument();
  });

  test("Renders: todo", () => {
    render(<QRCodeModal />);
    const pitch = screen.getByText(
      /Scan the QR code to visit Frontend Mentor and take your coding skills to the next level/i
    );
    expect(pitch).toBeInTheDocument();
  });
});
